import cookie from 'cookie'

export default async function handler (req, res) {
  // Allow only POST request
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    // Clear Cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('adminToken', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: new Date(0), // Expire immediately
        path: '/'
      })
    )

    return res.status(200).json({
      success: true,
      message: 'Logout successful'
    })
  } catch (error) {
    console.log('Logout Error:', error)

    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}
