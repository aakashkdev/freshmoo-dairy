import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const products = [
  {
    id: 1,
    name: 'Fresh Cow Milk (1L Packet)',
    price: '₹60',
    description: 'Pure, unadulterated milk from grass-fed cows',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Buffalo Milk (1L Packet)',
    price: '₹80',
    description: 'Creamier and thicker milk with higher fat content',
    image: 'https://dairynutrition.ca/sites/dairynutrition/files/image_file_browser/dn_article/2023-03/shutterstock_4305538_1182x788px.jpg'
  },
  {
    id: 3,
    name: 'Homemade Paneer (500g)',
    price: '₹200',
    description: 'Fresh, chemical-free cottage cheese',
    image:'https://storyofspices.in/wp-content/uploads/2022/03/Homemade_paneer_recipe_story_of_spices--scaled.jpg'
  },
  {
    id: 4,
    name: 'Pure Desi Ghee (500ml)',
    price: '₹450',
    description: 'Traditional clarified butter with rich aroma',
    image: 'https://consumer-voice.org/wp-content/uploads/2021/01/desi-ghee.png'
  },
  {
    id: 5,
    name: 'Sweet Lassi (500ml)',
    price: '₹50',
    description: 'Refreshing yogurt-based drink',
    image: 'https://static.toiimg.com/thumb/58360232.cms?imgsize=1259672&width=800&height=800'
  },
  {
    id: 6,
    name: 'White Butter (500g)',
    price: '₹300',
    description: 'Hand-churned fresh butter',
    image: 'https://theindianfoodie.com/wp-content/uploads/2024/07/safed-makhan-3.jpg'
  },
  {
    id: 7,
    name: 'Milk Ice Cream (500ml)',
    price: '₹180',
    description: 'Creamy natural ice cream',
    image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 8,
    name: 'Farmhouse Cheese (200g)',
    price: '₹250',
    description: 'Aged cheddar with complex flavors',
    image: 'https://farmfetch.co/cdn/shop/products/Isle_of_Mull_Farmhouse_Cheese1.jpg?v=1700221304&width=1080'
  },
  {
    id: 9,
    name: 'Flavored Milk (Chocolate 250ml)',
    price: '₹40',
    description: 'Refreshing strawberry flavored milk',
    image: 'https://www.whitakerschocolates.com/cdn/shop/articles/Chocolate-Ingredients_520x500_c496776e-df9b-4348-a662-5ff65279f5ca.jpg?v=1736771856'
  },
  {
    id: 10,
    name: 'Flavored Milk (Strawberry 250ml)',
    price: '₹40',
    description: 'Refreshing strawberry flavored milk',
    image: 'https://www.cleaneatingwithkids.com/wp-content/uploads/2022/07/chocolate-strawberry-milk--500x375.png'
  },
  {
    id: 11,
    name: 'Curd (500g)',
    price: '₹80',
    description: 'Probiotic-rich natural yogurt',
    image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-106299775,width-600,resizemode-4/106299775.jpg'
  },
  {
    id: 12,
    name: 'Shrikhand (200g)',
    price: '₹120',
    description: 'Sweet strained yogurt dessert',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeW3v_MKIkaFmnSOhzBkp0SJHQGBNz2uut7g&s'
  }
]

const Products = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Dairy Products
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Premium quality dairy products made with traditional Indian methods
        </motion.p>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-orange-500 font-bold text-lg mb-3">{product.price}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg transition-colors flex-1 mr-2">
                    Add to Cart
                  </button>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products