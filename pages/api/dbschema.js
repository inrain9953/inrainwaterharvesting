import mongoose from 'mongoose'

const productionModel = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  message: String
})

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  excerpt: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  seoTitle: {
    type: String,
    default: '',
    trim: true
  },
  seoDescription: {
    type: String,
    default: '',
    trim: true
  },
  keywords: {
    type: String,
    default: '',
    trim: true
  },
  status: {
    type: String,
    enum: ['Draft', 'Published'],
    default: 'Draft'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export const Product =
  mongoose.models?.inrainwaterharvesting ||
  mongoose.model('inrainwaterharvesting', productionModel)
export const Blog = mongoose.models?.Blog || mongoose.model('Blog', blogSchema)
