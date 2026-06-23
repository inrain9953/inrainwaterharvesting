import mongoose from 'mongoose'
import { Product } from './dbschema'
import { GoogleAdsMail } from './lib/googleadmail'

export default async function GoogleAdForm (req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        message: 'Method Not Allowed'
      })
    }

    const { name, phone, email, message } = req.body

    await mongoose.connect(process.env.url)

    const product = new Product({
      name,
      email,
      mobile: phone,
      message,
      submittedAt: new Date()
    })

    const result = await product.save()

    if (!result) {
      return res.status(500).json({
        error: 'Form submission failed'
      })
    }

    // Send mail in background (non-blocking)
    GoogleAdsMail({
      userEmail: email,
      userName: name,
      phone,
      message
    }).catch(err => {
      console.error('SMTP Error:', err)
    })

    // Return response immediately
    return res.status(200).json({
      message: 'Form submitted successfully'
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      error: 'Internal Server Error'
    })
  }
}
