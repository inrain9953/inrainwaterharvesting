import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'
import { Blog } from '@/pages/api/dbschema'
import mongoose from 'mongoose'

const BlogNameSlug = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>
  }
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta property='og:title' content={blog.title} />
        <meta property='og:description' content={blog.excerpt} />
        <meta property='og:type' content='article' />
        <meta property='og:keywords' content={blog.keywords} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={blog.title} />
        <meta name='twitter:description' content={blog.excerpt} />
        <link
          rel='canonical'
          href={`https://inrainwaterharvesting.com/blogs/${blog.slug}`}
        />
      </Head>
      <Navbar />

      <div className='bg-slate-50 min-h-screen'>
        <article className='max-w-5xl mx-auto px-4 py-10'>
          {/* Hero Card */}
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden mb-10'>
            {/* Featured Image */}
            <div className='relative'>
              <img
                src={blog.image}
                alt={blog.title}
                className='w-full h-[250px] md:h-[450px] object-cover'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

              <div className='absolute bottom-0 left-0 p-6 md:p-10 text-white'>
                {blog.category && (
                  <span className='inline-block bg-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4'>
                    {blog.category}
                  </span>
                )}

                <h1 className='text-3xl md:text-5xl font-bold leading-tight max-w-4xl'>
                  {blog.title}
                </h1>

                <div className='flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-200'>
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>

                  {blog.author && (
                    <>
                      <span>•</span>
                      <span>{blog.author}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className='bg-white rounded-2xl shadow-lg p-6 md:p-10'>
            <div
              className='
          prose
          prose-lg
          max-w-none
          prose-headings:text-slate-800
          prose-p:text-slate-700
          prose-p:leading-8
          prose-img:rounded-xl
          prose-img:shadow-md
          prose-a:text-blue-600
          prose-a:no-underline
          hover:prose-a:underline
          prose-blockquote:border-l-4
          prose-blockquote:border-blue-600
          prose-blockquote:bg-blue-50
          prose-blockquote:py-2
          prose-blockquote:px-4
          prose-ul:text-slate-700
          prose-ol:text-slate-700
        '
              dangerouslySetInnerHTML={{
                __html: blog.content
              }}
            />
          </div>

          {/* CTA Section */}
          <div className='mt-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-lg'>
            <h3 className='text-2xl font-bold mb-3'>
              Looking for Rainwater Harvesting Solutions?
            </h3>

            <p className='mb-6 text-blue-100'>
              Get expert consultation for rainwater harvesting, groundwater
              recharge, and sustainable water management projects.
            </p>

            <a
              href='/contact-us'
              className='inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition'
            >
              Contact Our Experts
            </a>
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}
export default BlogNameSlug

export async function getStaticPaths () {
  await mongoose.connect(process.env.url)

  const blogs = await Blog.find({ status: 'Published' }, { slug: 1 }).lean()

  const paths = blogs.map(blog => ({
    params: {
      slug: blog.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps ({ params }) {
  await mongoose.connect(process.env.url)

  const blog = await Blog.findOne({
    slug: params.slug,
    status: 'Published'
  }).lean()

  if (!blog) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      blog: JSON.parse(JSON.stringify(blog))
    },
    revalidate: 3600
  }
}
