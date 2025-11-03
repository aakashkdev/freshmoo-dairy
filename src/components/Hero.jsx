import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 to-green-800/80 z-10"></div>

      <div className="container mx-auto px-4 text-center text-white relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Farm Fresh <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">Dairy</span> Delivered
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Pure, natural dairy products straight from our farm to your doorstep
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#products"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Products
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        {/* Floating milk icons / decorative shapes */}
        <motion.div
          className="absolute -bottom-10 left-10 w-16 h-16 bg-white/40 rounded-full blur-2xl animate-bounce-slow"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>

        <motion.div
          className="absolute -top-10 right-20 w-24 h-24 bg-yellow-300/30 rounded-full blur-3xl animate-bounce-slow"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>

        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
