import { motion } from "motion/react";

export const WriteBlog = () => {
    return (
      <div className="w-full min-h-screen flex items-center justify-center px-4 py-8">
        <div 
        style={{ boxShadow: "var(--shadow-input)" }}
        className="w-full max-w-md bg-white rounded-2xl  p-6">
          <h2 className="text-xl md:text-2xl text-center font-bold text-gray-800 mb-2">Start Writing !</h2>
          <h2 className="text-sm sm:text-base font-light text-center mb-5 tracking-tighter antialiased">Share your thoughts to the world</h2>
          <div className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-semibold text-gray-700 mb-3">
                    Title
                    </label>
                    <input
                    id="title"
                    type="text"
                    placeholder="Enter your blog title"
                    className="w-full px-4 py-2 text-sm border border-gray-100 rounded-lg shadow-sm focus:outline-none  placeholder-gray-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="content" className="font-semibold text-gray-700 mb-3">
                    Content
                    </label>
                    <textarea
                    id="content"
                    rows={8}
                    placeholder="Write your content here..."
                    className="w-full px-4 py-2 text-sm border border-gray-100 rounded-lg shadow-sm focus:outline-none  placeholder-gray-400"
                    ></textarea>
                </div>

                <motion.button
                initial={false}
                whileTap={{scale:0.97}}
              
                    className="w-full bg-black text-white py-2.5 text-sm font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200"
                >
                    ✍️ Publish Blog
                </motion.button>
            </div>
            </div>
      </div>
    );
  };
  