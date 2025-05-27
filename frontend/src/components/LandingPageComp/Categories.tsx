import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
export const Categories = () => {
  // Sample categories data - replace with your actual categories

  const navigate=useNavigate();
  
  const categories = [
    { id: 1, name: "Technology", postCount: 24, icon: "💻" },
    { id: 2, name: "Lifestyle", postCount: 18, icon: "🌿" },
    { id: 3, name: "Travel", postCount: 15, icon: "✈️" },
    { id: 4, name: "Food", postCount: 12, icon: "🍕" },
    { id: 5, name: "Health", postCount: 10, icon: "💪" },
    { id: 6, name: "Business", postCount: 9, icon: "📊" },
    { id: 7, name: "Art & Design", postCount: 14, icon: "🎨" },
    { id: 8, name: "Science", postCount: 16, icon: "🔬" },
  ];

  return (
    <div className="w-full bg-white py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Discover Latest <span className="italic">Categories</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl ">
            Explore trending categories and topics to start writing your thoughts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="border border-gray-200 rounded-lg p-4 sm:p-5 lg:p-6 hover:shadow-sm transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">{category.icon}</span>
                <span className="bg-black text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-full">
                  {category.postCount} posts
                </span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-gray-900">{category.name}</h3>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-500">
                  {Math.floor(Math.random() * 10) + 2} authors
                </span>
                <motion.span 
                  className="text-xs sm:text-sm font-medium flex items-center text-black group-hover:translate-x-1 transition-transform duration-300"
                  whileHover={{ x: 4 }}
                  onClick={()=>{
                    navigate("/explore");
                  }}
                >
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Categories;