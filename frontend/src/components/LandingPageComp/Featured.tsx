import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export const Featured = () => {

  const navigate=useNavigate();
  const featuredBlogs = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      excerpt: "Exploring the latest trends in web development and what to expect in the coming years.",
      category: "Technology",
      author: {
        name: "Alex Morgan",
        avatar: "https://images.unsplash.com/photo-1740252117044-2af197eea287?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww"
      },
      date: "Apr 18, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1596659387022-ced30c7de50b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      title: "Mindfulness Practices for Creative Professionals",
      excerpt: "Discover how mindfulness can enhance creativity and improve your workflow.",
      category: "Lifestyle",
      author: {
        name: "Jordan Lee",
        avatar: "https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
      },
      date: "Apr 15, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1629491698472-e80ff3deaf4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2slMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      title: "Sustainable Travel: Exploring Without Leaving a Footprint",
      excerpt: "Tips and destinations for the environmentally conscious traveler.",
      category: "Travel",
      author: {
        name: "Sam Rivera",
        avatar: "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
      },
      date: "Apr 12, 2025",
      readTime: "6 min read",
      image: "https://plus.unsplash.com/premium_photo-1686309673175-783dde7f3632?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hY2Jvb2slMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="w-full bg-white py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
                Featured <span className="italic">Blogs</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl">
                Hand-picked articles from our top writers across various categories.
              </p>
            </div>
            <motion.a 
              whileHover={{ x: 4 }}
              className="mt-4 sm:mt-0 flex items-center text-sm font-medium text-black"
              href="#"
            >
              View all articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredBlogs.map((blog, index) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-4">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2 ">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={blog.author.avatar} 
                        alt={blog.author.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {blog.author.name}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {blog.date} · {blog.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-100 pt-10 mt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-xl p-6 md:p-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Want to get featured?</h3>
              <p className="text-gray-600 max-w-md">Submit your best work and get a chance to be featured on our homepage.</p>
            </div>
            <motion.button
            onClick={()=>{
              navigate("/write");
            }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-black text-white font-medium tracking-wide rounded-lg hover:bg-gray-900 transition-all duration-200"
            >
              Submit Your Blog
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;