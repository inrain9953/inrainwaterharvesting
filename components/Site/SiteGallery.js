import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const reviews = [
  { id: 4, src: '/projects/4.jpeg', alt: 'Working Site 4' },
  { id: 5, src: '/projects/5.jpeg', alt: 'Working Site 5' },
  { id: 7, src: '/projects/7.jpeg', alt: 'Working Site 7' },
  { id: 8, src: '/projects/8.jpeg', alt: 'Working Site 8' },
  { id: 9, src: '/projects/9.jpeg', alt: 'Working Site 9' },
  { id: 10, src: '/projects/10.jpeg', alt: 'Working Site 10' },
  { id: 11, src: '/projects/11.jpeg', alt: 'Working Site 11' },
  { id: 12, src: '/projects/12.jpeg', alt: 'Working Site 12' },
  { id: 13, src: '/projects/13.jpeg', alt: 'Working Site 13' },
  { id: 14, src: '/projects/14.jpeg', alt: 'Working Site 14' },
  { id: 15, src: '/projects/15.jpeg', alt: 'Working Site 15' },
  { id: 18, src: '/projects/18.jpeg', alt: 'Working Site 18' }
]
const SiteGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <section className='pt-5 bg-gradient-to-br from-sky-50 to-white'>
      <div className='relative h-20 flex items-center justify-center'>
        <h2 className='text-4xl font-bold text-gray-800'>Site Work Gallery</h2>
      </div>
      {/* Gallery */}
      <div className='max-w-7xl mx-auto p-4'>
        <div className='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
          {reviews.map(item => (
            <motion.div
              key={item.id}
              layout
              whileHover={{ scale: 1.03 }}
              className='cursor-pointer overflow-hidden rounded-xl'
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className='rounded-xl object-cover w-full h-auto'
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className='relative max-w-5xl w-[90%]'
            >
              <Image
                src={selectedImage}
                alt='Review Full'
                width={900}
                height={600}
                className='rounded-2xl object-contain m-auto h-auto w-auto'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default SiteGallery
