import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-700/90 to-green-800/90"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Farm Fresh <span className="text-orange-400">Dairy</span> Delivered
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Pure, natural dairy products straight from our farm to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#products"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Products
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero