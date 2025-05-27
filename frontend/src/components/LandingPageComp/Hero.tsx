import { motion } from "motion/react";
import { Navbar } from "../Navbar";
import { useNavigate } from "react-router-dom";

export const Hero = () => {

    const navigate=useNavigate();
  return (
    <>
        <div className="sticky top-0 z-50">
            <Navbar/>
        </div>
        <div className="w-full bg-white py-10 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Hero Text Content */}
            <div className="max-w-xl lg:max-w-2xl mb-12 lg:mb-0">
                <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
                >
                Share your <span className="italic">thoughts</span>, <br className="hidden sm:block" />
                <span className="text-black bg-gradient-to-r from-gray-900 to-black bg-clip-text ">inspire the world</span>
                </motion.h1>
                
                <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 font-light  leading-relaxed mb-8 sm:mb-10 max-w-lg"
                >
                Publish your stories, ideas, and expertise in a space designed for writers like you. Connect with readers who resonate with your voice.
                </motion.p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                <motion.button
                onClick={()=>{
                    navigate("/edit")
                }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-black text-white font-medium tracking-wide rounded-lg hover:bg-gray-900 transition-all duration-200"
                >
                    Start Writing
                </motion.button>
                
                <motion.button
                onClick={()=>{
                    navigate("/explore")
                }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-gray-200 text-gray-900 font-medium tracking-wide rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                    Explore Blogs
                </motion.button>
                </div>
            </div>
            
            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-xl lg:w-2/5"
            >
                <div className="bg-gray-100 aspect-[4/3] sm:aspect-[16/9]">
                <img 
                    src="https://plus.unsplash.com/premium_photo-1720448973639-230b93a8c2bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Person writing on a laptop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-lg max-w-xs">
                    <p className="text-gray-900 text-sm sm:text-base">
                    "Writing is the painting of the voice" 
                    <span className="block mt-1 text-xs sm:text-sm font-normal text-gray-600 text-right">— Voltaire</span>
                    </p>
                </div>
                </div>
            </motion.div>
            </div>
            
            {/* Stats Section */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 pt-12 border-t border-gray-100"
            >
            <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-black mb-2 ">10k<span className="text-gray-400">+</span></p>
                <p className="text-gray-600 text-sm sm:text-base uppercase tracking-wider font-medium">Active Writers</p>
            </div>
            <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-black mb-2 ">50k<span className="text-gray-400">+</span></p>
                <p className="text-gray-600 text-sm sm:text-base uppercase tracking-wider font-medium">Daily Readers</p>
            </div>
            <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-black mb-2 ">100k<span className="text-gray-400">+</span></p>
                <p className="text-gray-600 text-sm sm:text-base uppercase tracking-wider font-medium">Published Blogs</p>
            </div>
            <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-black mb-2 ">120<span className="text-gray-400">+</span></p>
                <p className="text-gray-600 text-sm sm:text-base uppercase tracking-wider font-medium">Categories</p>
            </div>
            </motion.div>
        </div>
        </div>
    </>
  );
};