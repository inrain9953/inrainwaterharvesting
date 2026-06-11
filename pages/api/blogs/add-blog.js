import mongoose from 'mongoose'
import { Blog } from '../dbschema'

export default async function BlogSubmit(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        message: 'Method Not Allowed'
      })
    }

    // Parse JSON body
    const {
      title,
      slug,
      excerpt,
      content,
      image,
      seoTitle = '',
      seoDescription = '',
      keywords = '',
      status = 'Draft'
    } = req.body

    // Validate required fields
    if (!title || !slug || !excerpt || !content) {
      return res.status(400).json({
        error: 'Missing required fields: title, slug, excerpt, content'
      })
    }

    if (!image) {
      return res.status(400).json({
        error: 'Featured image is required'
      })
    }

    await mongoose.connect(process.env.url)

    const blog = new Blog({
      title,
      slug,
      excerpt,
      content,
      image, // Store base64 image directly
      seoTitle,
      seoDescription,
      keywords,
      status
    })

    const result = await blog.save()

    if (!result) {
      return res.status(500).json({
        error: 'Blog submission failed'
      })
    }

    return res.status(200).json({
      message: 'Blog added successfully',
      blog: {
        ...result.toObject(),
        image: '[base64 data]' // Don't return the actual base64 in response to keep it small
      }
    })
  } catch (error) {
    console.error('Blog submission error:', error)

    return res.status(500).json({
      error: 'Internal Server Error',
      details: error.message
    })
  }
}
