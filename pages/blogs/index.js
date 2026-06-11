import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CategoryIcon from '@mui/icons-material/Category'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { Blog } from '../api/dbschema'
import mongoose from 'mongoose'

export const BlogsPage = ({
  initialBlogs,
  initialPagination,
  initialError
}) => {
  const [blogs, setBlogs] = useState(initialBlogs || [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(initialError || '')
  const [pagination, setPagination] = useState(initialPagination || null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const formatDate = date => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <>
      <Head>
        <title>Rainwater Harvesting Blogs | InRain Construction</title>

        <meta
          name='description'
          content='Read expert blogs on rainwater harvesting, groundwater recharge, water conservation, industrial water management and sustainable water solutions.'
        />

        <link rel='canonical' href='https://inrainwaterharvesting.com/blogs' />
      </Head>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
        {/* Hero Section */}
        <div className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10'>
          <div className='max-w-6xl mx-auto px-4'>
            <h1 className='text-5xl font-bold mb-4'>InRain Blogs</h1>
            <p className='text-xl text-blue-100 max-w-2xl'>
              Discover insights on rainwater harvesting, water conservation, and
              sustainable solutions
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className='max-w-6xl mx-auto px-4 py-12'>
          {/* Loading State */}
          {loading && (
            <div className='flex justify-center items-center py-20'>
              <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500'></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6'>
              <p className='text-red-700 font-semibold'>⚠️ {error}</p>
            </div>
          )}

          {/* Blogs Grid */}
          {!loading && blogs.length > 0 && (
            <>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                {blogs.map(blog => (
                  <Link key={blog._id} href={`/blogs/${blog.slug}`}>
                    <div className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 overflow-hidden cursor-pointer group'>
                      {/* Image Container */}
                      {blog.image && (
                        <div className='relative h-48 bg-gradient-to-br from-blue-200 to-indigo-200 overflow-hidden'>
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
                          />
                          <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent'></div>
                        </div>
                      )}

                      {/* Content Container */}
                      <div className='p-6'>
                        {/* Category Badge */}
                        <div className='inline-block mb-3'>
                          <span className='inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold'>
                            <CategoryIcon fontSize='small' /> {blog.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className='text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition'>
                          {blog.title}
                        </h2>

                        {/* Excerpt */}
                        <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                          {blog.excerpt}
                        </p>

                        {/* Meta Information */}
                        <div className='flex items-center justify-between pt-4 border-t border-slate-100'>
                          <div className='flex items-center gap-2 text-xs text-gray-500'>
                            <AccessTimeIcon fontSize='small' />
                            {formatDate(blog.createdAt)}
                          </div>
                          <span className='text-blue-600 font-semibold text-sm hover:text-blue-700'>
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className='flex justify-center items-center gap-2 mb-12'>
                  {currentPage > 1 && (
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                    >
                      ← Previous
                    </button>
                  )}

                  {/* Page Numbers */}
                  <div className='flex gap-1'>
                    {Array.from(
                      { length: pagination.totalPages },
                      (_, i) => i + 1
                    ).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-lg font-semibold transition ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {currentPage < pagination.totalPages && (
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                    >
                      Next →
                    </button>
                  )}
                </div>
              )}

              {/* Blog Count */}
              <div className='text-center text-gray-600 mb-6'>
                Showing {(currentPage - 1) * 9 + 1} to{' '}
                {Math.min(currentPage * 9, pagination.totalBlogs)} of{' '}
                {pagination.totalBlogs} blogs
              </div>
            </>
          )}

          {/* No Blogs State */}
          {!loading && blogs.length === 0 && (
            <div className='text-center py-20'>
              <div className='text-6xl mb-4'>📚</div>
              <h3 className='text-2xl font-bold text-slate-800 mb-2'>
                No blogs found
              </h3>
              <p className='text-gray-600 mb-6'>
                {search || category
                  ? 'Try adjusting your search or filters'
                  : 'No published blogs yet. Check back soon!'}
              </p>
              {(search || category) && (
                <button
                  onClick={() => {
                    setSearch('')
                    setCategory('')
                    fetchBlogs(1, '', '')
                  }}
                  className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold'
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogsPage

export async function getStaticProps () {
  await mongoose.connect(process.env.url)

  const blogs = await Blog.find({
    status: 'Published'
  })
    .sort({ createdAt: -1 })
    .limit(49)
    .lean()

  return {
    props: {
      initialBlogs: JSON.parse(JSON.stringify(blogs)),
      initialPagination: {
        totalBlogs: blogs.length,
        totalPages: 1
      },
      initialError: ''
    },
    revalidate: 3600
  }
}
