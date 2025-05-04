import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const images = [
  'https://agronfoodprocessing.com/wp-content/uploads/2023/06/frozen-desserts.png',
  'https://tamilmilk.com/cdn/shop/files/freshmilk_4c782fa0-0ba2-4eab-81c3-21707b7b9819.jpg?v=1724966928&width=1024',
  'https://www.shutterstock.com/image-photo/brahman-cows-cattle-argentina-600nw-2422589083.jpg',
  'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://www.healthifyme.com/blog/wp-content/uploads/2023/07/Curd.jpg',
  'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
]

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Farm Life
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={image} 
                alt={`Farm gallery ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery