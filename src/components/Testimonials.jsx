import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Neha Kumari',
    role: 'Home Cook',
    content: 'FreshMoo ka doodh bahut shuddh aur tasty hai. Main roz ghar mein chai aur sweets banati hoon, sabka taste aur bhi accha lagta hai.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Rohit Kumar',
    role: 'Fitness Lover',
    content: 'Main apne health ke liye sirf FreshMoo ka milk peeta hoon. Yeh natural hai aur energy deta hai – bilkul fresh taste!',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 3,
    name: 'Jitendra Kumar',
    role: 'Regular Customers',
    content: 'Hum saalon se FreshMoo ka doodh le rahe hain. Bachon ko bhi pasand hai aur quality hamesha best milti hai.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg'
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Hamare Customers Kya Kehte Hain
        </motion.h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-orange-400 mb-4">
                <FaQuoteLeft size={24} />
              </div>
              <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
