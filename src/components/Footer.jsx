import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-orange-400 mr-2">Fresh</span>Moo
            </h3>
            <p className="mb-4 text-green-100">
              Providing farm-fresh dairy products since 2010. Our commitment to quality and sustainability makes us the preferred choice for health-conscious families.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-100 hover:text-orange-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-green-100 hover:text-orange-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-green-100 hover:text-orange-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-green-100 hover:text-orange-400 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-green-100 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-green-100 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-green-100 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#gallery" className="text-green-100 hover:text-orange-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-green-100 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-green-100 hover:text-orange-400 transition-colors">Fresh Milk</a></li>
              <li><a href="#" className="text-green-100 hover:text-orange-400 transition-colors">Paneer & Cheese</a></li>
              <li><a href="#" className="text-green-100 hover:text-orange-400 transition-colors">Yogurt & Curd</a></li>
              <li><a href="#" className="text-green-100 hover:text-orange-400 transition-colors">Butter & Ghee</a></li>
              <li><a href="#" className="text-green-100 hover:text-orange-400 transition-colors">Specialty Items</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-orange-400" />
                <span className="text-green-100">Lohra, Dist-Nalanda</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-orange-400" />
                <span className="text-green-100"> +91-8969348587</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-400" />
                <span className="text-green-100">info@freshmoo.com</span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h5 className="text-lg font-medium mb-4">Subscribe to Newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-green-800 pt-8 mt-8 text-center"
        >
          <p className="text-green-100">
            &copy; {currentYear} FreshMoo Dairy Farm. All Rights Reserved. | 
            <a href="#" className="hover:text-orange-400 ml-2 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-orange-400 ml-2 transition-colors">Terms of Service</a>
          </p>
          <p className="text-green-200 text-sm mt-2">
            Made with ❤️ by FreshMoo Team
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer