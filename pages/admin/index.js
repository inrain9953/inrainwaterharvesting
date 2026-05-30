import { useState } from 'react'
import { useRouter } from 'next/router'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

export default function AdminLogin () {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setError('')

    if (!formData.username || !formData.password) {
      setError('Please fill all fields')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('adminToken', data.token)
        router.push('/admin/dashboard')
      } else {
        setError(data.message || 'Invalid credentials')
      }
    } catch (error) {
      setError('Something went wrong')
    }

    setLoading(false)
  }

  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-br from-sky-100 via-white to-green-100 flex items-center justify-center px-5'>
        <div className='w-full max-w-md'>
          {/* Card */}
          <div className='bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-200 rounded-[36px] overflow-hidden'>
            {/* Header */}
            <div className='bg-gradient-to-r from-sky-600 to-green-600 p-5 text-center text-white'>
              <div className='w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-lg'>
                <AdminPanelSettingsIcon style={{ fontSize: '45px' }} />
              </div>

              <h1 className='text-3xl font-bold'>Admin Login</h1>

              <p className='text-sm text-slate-100 mt-2'>
                InRain Construction Pvt. Ltd.
              </p>
            </div>

            {/* Form */}
            <div className='p-8'>
              <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Username */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Username
                  </label>

                  <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='Enter username'
                    className='w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none bg-slate-50 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300'
                  />
                </div>

                {/* Password */}
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Password
                  </label>

                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='Enter password'
                      className='w-full rounded-2xl border border-slate-300 px-5 py-4 pr-14 outline-none bg-slate-50 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300'
                    />

                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600 transition'
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className='bg-red-50 border border-red-200 text-red-600 rounded-2xl px-4 py-3 text-sm font-medium'>
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <button
                  type='submit'
                  disabled={loading}
                  className='w-full bg-gradient-to-r from-sky-600 to-green-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-white font-bold py-4 rounded-2xl shadow-lg disabled:opacity-70'
                >
                  {loading ? 'Signing In...' : 'Login to Dashboard'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
