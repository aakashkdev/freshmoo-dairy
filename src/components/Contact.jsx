import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions or want to place an order? Reach out to us through any of these channels.
        </motion.p>
        
        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start bg-green-50 p-4 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Our Farm</h4>
                    <p className="text-gray-600">Lohra, Dist-Nalanda, Bihar</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-green-50 p-4 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91-8969348587</p>
                    <p className="text-gray-600">Orders: +91-8969348587</p>
                  </div>
                </div>

                <div className="flex items-start bg-green-50 p-4 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">aakasheonix@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start bg-green-50 p-4 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaClock className="text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 7 AM – 7 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder or Map */}
            <div className="bg-green-50 p-8 rounded-xl shadow-lg flex items-center justify-center text-gray-600">
              <p className="text-center">Map or Contact Form can go here</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
