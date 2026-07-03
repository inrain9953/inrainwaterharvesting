import CallButtonPress from './lib/callSchema'
import WhatsappClick from './lib/whatsappSchema'
import { connectToDatabase } from './dbconnect'

export default async function handler (req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    await connectToDatabase()
    const Call = await CallButtonPress.find({}).lean()
    const Whatsapp = await WhatsappClick.find({}).lean()
    return res.status(200).json({ Call, Whatsapp })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
}
