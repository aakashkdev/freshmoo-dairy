import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    question: 'हमारा फार्म कहाँ स्थित है?',
    answer: 'हमारा फार्म Lohra, Harnaut (Bihar) में है। यहाँ हमारी गायें खुली चराई में रहती हैं और साफ़ हवा का आनंद लेती हैं।'
  },
  {
    question: 'क्या आपके प्रोडक्ट्स ऑर्गेनिक हैं?',
    answer: 'हम ऑर्गेनिक तरीके अपनाते हैं, लेकिन certified ऑर्गेनिक नहीं हैं। हमारी प्राथमिकता है कि गायों का सही देखभाल हो और खेती sustainable तरीके से हो।'
  },
  {
    question: 'क्या आप मेरे इलाके में डिलीवरी करते हैं?',
    answer: 'माफ़ कीजिए, फिलहाल हम डिलीवरी नहीं कर पा रहे हैं। आप फार्म से सीधे प्रोडक्ट्स ले सकते हैं।'
  },
  {
    question: 'दूध की क्वालिटी कैसे सुनिश्चित करते हैं?',
    answer: 'हम साफ-सफाई और hygiene पर ध्यान रखते हैं। दूध दुहने के तुरंत बाद ठंडा किया जाता है और नियमित testing की जाती है ताकि आप हमेशा fresh और safe milk पाएं।'
  },
  {
    question: 'क्या मैं फार्म पर आ सकता हूँ?',
    answer: 'हाँ! आप फार्म पर आ सकते हैं, लेकिन कृपया पहले कॉल करके appointment ले लें। हम आपको दौरे का समय और जानकारी देंगे।'
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
          अक्सर पूछे जाने वाले सवाल
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          आपके सवालों के जवाब यहाँ मिलेंगे। अगर आपका सवाल नहीं दिख रहा है, तो हमें सीधे संपर्क करें।
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
