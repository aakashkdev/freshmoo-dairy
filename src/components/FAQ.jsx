import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    question: 'Where is your farm located?',
    answer: 'Our farm is located in the fertile valleys of Sonoma County, California, where our cows enjoy open pastures and clean air.'
  },
  {
    question: 'Are your products organic?',
    answer: 'While we follow organic practices, we are not certified organic. We believe in going beyond organic standards with our humane treatment of animals and sustainable farming methods.'
  },
  {
    question: 'Do you deliver to my area?',
    answer: 'We currently deliver within a 50-mile radius of our farm. Enter your zip code on our delivery page to check availability.'
  },
  {
    question: 'How do you ensure milk quality?',
    answer: 'We maintain strict hygiene standards, regular testing, and rapid cooling of milk immediately after milking to ensure the highest quality and safety.'
  },
  {
    question: 'Can I visit your farm?',
    answer: 'Yes! We offer farm tours on select weekends. Please check our events page for upcoming tour dates and booking information.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions? We've got answers. If you don't see your question here, feel free to contact us.
        </motion.p>
        
        <div ref={ref} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className={`w-full text-left p-4 rounded-lg transition-colors ${activeIndex === index ? 'bg-green-700 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-white rounded-b-lg border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ