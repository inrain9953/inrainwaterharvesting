'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'
import ImageIcon from '@mui/icons-material/Image'
import LinkIcon from '@mui/icons-material/Link'

export default function Blogs ({ onClose }) {
  const [blog, setBlog] = useState({
    title: '',
    slug: '',
    seoTitle: '',
    seoDescription: '',
    keywords: '',
    excerpt: '',
    content: '',
    status: 'Draft'
  })

  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [linkText, setLinkText] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const contentRef = useRef(null)

  const generateSlug = title => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-')
  }

  const handleChange = e => {
    const { name, value } = e.target

    if (name === 'title') {
      setBlog({
        ...blog,
        title: value,
        slug: generateSlug(value)
      })
    } else {
      setBlog({
        ...blog,
        [name]: value
      })
    }
  }

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const convertImageToBase64 = () => {
    return new Promise((resolve, reject) => {
      if (!image) {
        reject(new Error('No image selected'))
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result)
      }
      reader.onerror = () => {
        reject(new Error('Failed to read image'))
      }
      reader.readAsDataURL(image)
    })
  }

  const insertLink = () => {
    if (linkText && linkUrl) {
      const linkHtml = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
      setBlog({
        ...blog,
        content: blog.content + linkHtml
      })
      setLinkText('')
      setLinkUrl('')
      setShowLinkModal(false)
    }
  }

  const validateForm = () => {
    if (!blog.title.trim()) {
      setError('Blog title is required')
      return false
    }
    if (!blog.keywords.trim()) {
      setError('Keywords are required')
      return false
    }
    if (!blog.excerpt.trim()) {
      setError('Excerpt is required')
      return false
    }
    if (!blog.content.trim()) {
      setError('Blog content is required')
      return false
    }
    if (!image) {
      setError('Featured image is required')
      return false
    }
    return true
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Convert image to base64
      const imageBase64 = await convertImageToBase64()

      // Prepare JSON payload
      const blogData = {
        ...blog,
        image: imageBase64
      }

      console.log('Submitting blog with data:', {
        ...blog,
        image: '[base64 data]'
      })

      const res = await fetch('/api/blogs/add-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || data.message || 'Failed to create blog')
      }

      setSuccess(true)
      setBlog({
        title: '',
        slug: '',
        category: '',
        tags: '',
        seoTitle: '',
        seoDescription: '',
        keywords: '',
        excerpt: '',
        content: '',
        status: 'Draft'
      })
      setImage(null)
      setImagePreview(null)

      setTimeout(() => {
        setSuccess(false)
        onClose && onClose()
      }, 2000)
    } catch (error) {
      setError(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-slate-100 p-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='bg-white rounded-2xl shadow-2xl p-8'>
          {/* Header */}
          <div className='flex justify-between items-center mb-8 pb-6 border-b-2 border-slate-200'>
            <div>
              <h1 className='text-4xl font-bold text-slate-800'>
                Add New Blog
              </h1>
              <p className='text-gray-500 text-sm mt-1'>
                Create and manage your blog posts
              </p>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className='p-2 hover:bg-slate-100 rounded-lg transition'
              >
                <CloseIcon className='text-slate-600' />
              </button>
            )}
          </div>
          <form onSubmit={handleSubmit} className='space-y-8'>
            {/* Basic Information Section */}
            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl'>
              <h2 className='text-xl font-bold text-slate-800 mb-4'>
                Basic Information
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Title */}
                <div>
                  <label className='font-semibold text-slate-700 block mb-2'>
                    Blog Title *
                  </label>
                  <input
                    type='text'
                    name='title'
                    value={blog.title}
                    onChange={handleChange}
                    placeholder='Enter an engaging blog title'
                    className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition'
                    required
                  />
                </div>

                {/* Slug */}
                <div className='md:col-span-2'>
                  <label className='font-semibold text-slate-700 block mb-2'>
                    Blog Slug
                  </label>
                  <input
                    type='text'
                    name='slug'
                    value={blog.slug}
                    onChange={handleChange}
                    placeholder='auto-generated from title'
                    className='w-full border-2 border-slate-300 rounded-lg p-3 bg-slate-50 text-slate-600'
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Featured Image Section */}
            <div className='bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl'>
              <h2 className='text-xl font-bold text-slate-800 mb-4 flex items-center gap-2'>
                <ImageIcon className='text-purple-600' /> Featured Image *
              </h2>

              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='w-full border-2 border-dashed border-purple-300 rounded-lg p-4 focus:outline-none'
                required
              />

              {imagePreview && (
                <div className='mt-4'>
                  <p className='text-sm text-gray-600 mb-2'>Preview:</p>
                  <Image
                    src={imagePreview}
                    alt='preview'
                    width={300}
                    height={200}
                    className='rounded-lg shadow-md'
                  />
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className='bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl'>
              <h2 className='text-xl font-bold text-slate-800 mb-4'>
                Blog Content
              </h2>

              {/* Excerpt */}
              <div className='mb-4'>
                <label className='font-semibold text-slate-700 block mb-2'>
                  Short Description (Excerpt) *
                </label>
                <textarea
                  rows={3}
                  name='excerpt'
                  value={blog.excerpt}
                  onChange={handleChange}
                  placeholder='Write a brief summary of your blog post...'
                  className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-green-500 transition'
                  required
                />
              </div>

              {/* Content with Link Toolbar */}
              <div className='mb-4'>
                <div className='flex items-center justify-between mb-3'>
                  <label className='font-semibold text-slate-700'>
                    Blog Content *
                  </label>
                  <button
                    type='button'
                    onClick={() => setShowLinkModal(true)}
                    className='flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition text-sm'
                  >
                    <LinkIcon fontSize='small' /> Add Link
                  </button>
                </div>

                <textarea
                  ref={contentRef}
                  rows={15}
                  name='content'
                  value={blog.content}
                  onChange={handleChange}
                  placeholder="Write your blog content here... You can add links using the 'Add Link' button above."
                  className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-green-500 transition font-mono text-sm'
                  required
                />

                <p className='text-xs text-gray-500 mt-2'>
                  💡 Tip: Use the 'Add Link' button to insert hyperlinks easily
                </p>
              </div>
            </div>

            {/* SEO Section */}
            <div className='bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl'>
              <h2 className='text-xl font-bold text-slate-800 mb-4'>
                SEO Optimization
              </h2>

              <div className='space-y-4'>
                {/* SEO Title */}
                <div>
                  <label className='font-semibold text-slate-700 block mb-2'>
                    SEO Title
                  </label>
                  <input
                    type='text'
                    name='seoTitle'
                    value={blog.seoTitle}
                    onChange={handleChange}
                    placeholder='SEO optimized title for search engines'
                    className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    {blog.seoTitle.length}/60 characters
                  </p>
                </div>

                {/* SEO Description */}
                <div>
                  <label className='font-semibold text-slate-700 block mb-2'>
                    SEO Description
                  </label>
                  <textarea
                    rows={2}
                    name='seoDescription'
                    value={blog.seoDescription}
                    onChange={handleChange}
                    placeholder='Meta description for search results'
                    className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    {blog.seoDescription.length}/160 characters
                  </p>
                </div>

                {/* Keywords */}
                <div>
                  <label className='font-semibold text-slate-700 block mb-2'>
                    Keywords
                  </label>
                  <input
                    type='text'
                    name='keywords'
                    value={blog.keywords}
                    onChange={handleChange}
                    placeholder='e.g., rainwater harvesting, water management, conservation'
                    className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition'
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    Separate keywords with commas • {blog.keywords.length}{' '}
                    characters
                  </p>
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='font-semibold text-slate-700 block mb-2'>
                  Status
                </label>
                <select
                  name='status'
                  value={blog.status}
                  onChange={handleChange}
                  className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-slate-500 transition'
                >
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 pt-6 border-t-2 border-slate-200'>
              <button
                type='submit'
                disabled={loading}
                className={`flex-1 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                } text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105`}
              >
                {loading ? 'Saving...' : 'Save Blog'}
              </button>

              {onClose && (
                <button
                  type='button'
                  onClick={onClose}
                  className='flex-1 bg-slate-300 hover:bg-slate-400 text-slate-800 px-6 py-3 rounded-lg font-semibold transition'
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {/* Success Message */}
          {success && (
            <div className='mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg'>
              <p className='text-green-700 font-semibold'>
                ✓ Blog created successfully!
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg'>
              <p className='text-red-700 font-semibold'>✗ {error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Link Modal */}
      {showLinkModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-xl shadow-2xl p-6 max-w-md w-full'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-xl font-bold text-slate-800 flex items-center gap-2'>
                <LinkIcon className='text-blue-600' /> Add Hyperlink
              </h3>
              <button
                onClick={() => setShowLinkModal(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                <CloseIcon />
              </button>
            </div>

            <div className='space-y-4'>
              <div>
                <label className='font-semibold text-slate-700 block mb-2'>
                  Link Text
                </label>
                <input
                  type='text'
                  value={linkText}
                  onChange={e => setLinkText(e.target.value)}
                  placeholder='e.g., Read more about water conservation'
                  className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-blue-500'
                />
              </div>

              <div>
                <label className='font-semibold text-slate-700 block mb-2'>
                  URL
                </label>
                <input
                  type='url'
                  value={linkUrl}
                  onChange={e => setLinkUrl(e.target.value)}
                  placeholder='e.g., https://example.com'
                  className='w-full border-2 border-slate-300 rounded-lg p-3 focus:outline-none focus:border-blue-500'
                />
              </div>

              <div className='flex gap-3 pt-4'>
                <button
                  onClick={insertLink}
                  className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition'
                >
                  Insert Link
                </button>
                <button
                  onClick={() => setShowLinkModal(false)}
                  className='flex-1 bg-slate-300 hover:bg-slate-400 text-slate-800 px-4 py-2 rounded-lg font-semibold transition'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
