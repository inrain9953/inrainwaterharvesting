import mongoose from 'mongoose'
import { Blog } from '../../dbschema'

export default async function GetBlogBySlug(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({
        message: 'Method Not Allowed'
      })
    }

    const { slug } = req.query

    if (!slug) {
      return res.status(400).json({
        error: 'Slug is required'
      })
    }

    await mongoose.connect(process.env.url)

    const blog = await Blog.findOne({ slug, status: 'Published' }).lean()

    if (!blog) {
      return res.status(404).json({
        error: 'Blog not found'
      })
    }

    return res.status(200).json({
      success: true,
      blog
    })
  } catch (error) {
    console.error('Get blog error:', error)

    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      details: error.message
    })
  }
}
