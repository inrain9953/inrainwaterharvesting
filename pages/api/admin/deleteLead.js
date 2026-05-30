import jwt from 'jsonwebtoken'
import { connectToDatabase } from '../dbconnect'
import { Product } from '../dbschema'

export default async function handler (req, res) {
  // Allow only DELETE request
  if (req.method !== 'DELETE') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    // Get token from cookie
    const token = req.cookies.adminToken

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized'
      })
    }

    // Verify JWT
    jwt.verify(token, process.env.JWT_SECRET)

    // Connect MongoDB
    await connectToDatabase()

    // Get lead id
    const { id } = req.body

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Lead ID is required'
      })
    }

    // Delete lead
    const deletedLead = await Product.findByIdAndDelete(id)

    if (!deletedLead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Lead deleted successfully'
    })
  } catch (error) {
    console.log('Delete Lead Error:', error)

    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}
