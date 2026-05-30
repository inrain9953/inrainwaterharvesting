import jwt from 'jsonwebtoken'
import { connectToDatabase } from '../dbconnect'
import { Product } from '../dbschema'

export default async function handler (req, res) {
  try {
    // Only GET method
    if (req.method !== 'GET') {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      })
    }
    // Connect DB
    await connectToDatabase()

    // Get leads
    const leads = await Product.find({}).sort({ _id: -1 }).lean()

    return res.status(200).json({
      success: true,
      leads
    })
  } catch (error) {
    console.log(error)

    return res.status(500).json({
      success: false,
      message: 'Server Error'
    })
  }
}
