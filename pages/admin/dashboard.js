import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import DeleteIcon from '@mui/icons-material/Delete'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

export default function Dashboard () {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [leads, setLeads] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    checkAdmin()
    fetchLeads()
  }, [])

  // Verify Login
  const checkAdmin = async () => {
    try {
      const token = localStorage.getItem('adminToken')

      if (!token) {
        router.push('/admin')
        return
      }
      const res = await fetch('/api/admin/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!res.ok) {
        router.push('/admin')
      }
    } catch (error) {
      router.push('/admin')
    }
  }

  // Fetch Leads
  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/admin/lead')
      const data = await res.json()

      setLeads(data.leads || [])
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  // Delete Lead
  const deleteLead = async id => {
    const confirmDelete = confirm('Are you sure you want to delete this lead?')

    if (!confirmDelete) return

    try {
      const response = await fetch('/api/admin/deleteLead', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        fetchLeads()
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Logout
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/admin/logout', {
        method: 'POST'
      })

      const data = await response.json()

      if (data.success) {
        localStorage.removeItem('adminToken')
        router.push('/admin')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Search Filter
  const filteredLeads = leads.filter(
    lead =>
      lead.name?.toLowerCase().includes(search.toLowerCase()) ||
      lead.email?.toLowerCase().includes(search.toLowerCase()) ||
      lead.mobile?.toString().includes(search)
  )

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center text-xl font-semibold'>
        Loading Dashboard...
      </div>
    )
  }

  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <Navbar />
      <div className='bg-slate-100'>
        {/* HEADER */}
        <div className='bg-white shadow-md border-b top-0 z-50'>
          <div className='max-w-7xl mx-auto px-5 py-4 flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-bold text-slate-800'>
                InRain Admin Dashboard
              </h1>

              <p className='text-sm text-gray-500'>Welcome Admin</p>
            </div>

            <button
              onClick={handleLogout}
              className='bg-red-500 hover:bg-red-600 transition text-white px-5 py-3 rounded-2xl flex items-center gap-2 font-semibold shadow-lg'
            >
              <LogoutIcon />
              Logout
            </button>
          </div>
        </div>

        <div className='max-w-7xl mx-auto p-5'>
          {/* TOP STATS */}
          <div className='grid md:grid-cols-2 gap-5 mb-8'>
            {/* Total Leads */}
            <div className='bg-white rounded-[30px] shadow-md p-6 border border-slate-200 hover:shadow-xl transition'>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-gray-500'>Total Leads</p>

                  <h2 className='text-4xl font-bold mt-2 text-sky-600'>
                    {leads.length}
                  </h2>
                </div>

                <div className='w-16 h-16 rounded-full bg-sky-100 flex justify-center items-center'>
                  <PeopleAltIcon
                    style={{
                      fontSize: '35px'
                    }}
                    className='text-sky-600'
                  />
                </div>
              </div>
            </div>

            {/* SEARCH */}
            <div className='bg-white rounded-[30px] shadow-md border border-slate-200 p-5 mb-6'>
              <div className='relative'>
                <SearchIcon className='absolute top-4 left-4 text-gray-400' />

                <input
                  type='text'
                  placeholder='Search by name, email or phone...'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className='w-full border border-slate-300 rounded-2xl py-4 pl-14 pr-4 outline-none focus:ring-2 focus:ring-sky-500'
                />
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className='bg-white rounded-[30px] shadow-lg overflow-hidden border border-slate-200'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-sky-600 text-white'>
                  <tr>
                    <th className='p-4 text-left'>Name</th>
                    <th className='p-4 text-left'>Email</th>
                    <th className='p-4 text-left'>Mobile</th>
                    <th className='p-4 text-left'>Message</th>
                    <th className='p-4 text-center'>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead, index) => (
                      <tr
                        key={lead._id}
                        className='border-b hover:bg-slate-50 transition'
                      >
                        <td className='p-4 font-medium'>{lead.name}</td>

                        <td className='p-4'>{lead.email}</td>

                        <td className='p-4'>{lead.mobile}</td>

                        <td className='p-4 max-w-sm'>{lead.message}</td>

                        <td className='p-4 text-center'>
                          <button
                            onClick={() => deleteLead(lead._id)}
                            className='bg-red-100 hover:bg-red-500 hover:text-white transition p-3 rounded-xl'
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan='5'
                        className='text-center py-10 text-gray-500'
                      >
                        No Leads Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
