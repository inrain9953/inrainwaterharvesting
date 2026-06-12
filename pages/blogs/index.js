import Head from 'next/head'
import Link from 'next/link'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CategoryIcon from '@mui/icons-material/Category'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

export const BlogsPage = () => {
  return (
    <>
      <Head>
        <title>Rainwater Harvesting Blogs | InRain Construction</title>

        <meta
          name='description'
          content='Read expert blogs on rainwater harvesting, groundwater recharge, water conservation, industrial water management and sustainable water solutions.'
        />

        <link rel='canonical' href='https://inrainwaterharvesting.com/blogs' />
      </Head>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
        {/* Hero Section */}
        <div className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10'>
          <div className='max-w-6xl mx-auto px-4'>
            <h1 className='text-4xl font-bold mb-2'>InRain Blogs</h1>
            <p className='text-lg text-blue-100 max-w-2xl'>
              Discover insights on rainwater harvesting, water conservation, and
              sustainable solutions
            </p>
          </div>
        </div>

        <div className='bg-gray-50 py-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Blog Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Blog 1 Card */}
              <article className='group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
                {/* Image */}
                <div className='relative overflow-hidden'>
                  <Link href='/blogs/how-modular-rainwater-harvesting-is-revolutionizing-industrial-water-management'>
                    <Image
                      width={600}
                      height={400}
                      src='/new-generation-of-rainwater-harvesting.jpg'
                      alt='Modular Rainwater Harvesting'
                      className='w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110'
                    />
                  </Link>

                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent'></div>

                  <span className='absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                    Water Management
                  </span>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <div className='flex items-center gap-3 text-xs text-gray-500 mb-4'>
                    <span>📅 June 2025</span>
                    <span>•</span>
                    <span>5 Min Read</span>
                  </div>

                  <Link href='/blogs/how-modular-rainwater-harvesting-is-revolutionizing-industrial-water-management'>
                    <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300'>
                      How Modular Rainwater Harvesting is Revolutionizing
                      Industrial Water Management
                    </h3>
                  </Link>

                  <p className='text-gray-600 leading-relaxed text-sm line-clamp-3 mb-3'>
                    Discover how innovative modular rainwater harvesting systems
                    are helping industries reduce water costs, recharge
                    groundwater, and achieve sustainability goals while ensuring
                    long-term water security.
                  </p>

                  <Link
                    href='/blogs/how-modular-rainwater-harvesting-is-revolutionizing-industrial-water-management'
                    className='inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors'
                  >
                    Read Full Article
                    <svg
                      className='w-4 h-4 transition-transform group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogsPage
