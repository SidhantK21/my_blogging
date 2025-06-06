import { motion } from "motion/react";
import { useState } from "react";
import { CreateBlogInput } from "myblogcommonmod";
import axios from "axios";

export const WriteBlog = () => {

  const [title,setTitle]=useState<string>("");
  const [content,setContent]=useState<string>("");

  const handleBlogPost=()=>{

    const blogData:CreateBlogInput={
      title,
      content
    }

    if(!title || !content ){
      throw new Error("Please fill out all the details !")
    }

    try{
      const responsePosting=axios.post("/api/v1/blog",{
        blogData
      })

      console.log("Response : ",responsePosting);
    }catch(e){
      console.log("Error while posting the blog ",e);
    }

    console.log("Submitting the blog",blogData);
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-6 sm:py-8">
      <div 
        style={{ boxShadow: "var(--shadow-input)" }}
        className="w-full max-w-md bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-gray-800 mb-1 sm:mb-2">
          Start Writing!
        </h2>
        <h2 className="text-xs sm:text-sm md:text-base font-light text-center mb-4 sm:mb-5 tracking-tighter antialiased">
          Share your thoughts to the world
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold text-gray-700 text-sm mb-2 sm:mb-3">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg outline-none"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="content" className="font-semibold text-gray-700 text-sm mb-2 sm:mb-3">
              Content
            </label>
            <textarea
              id="content"
              rows={6}
              placeholder="Write your content here..."
              value={content}
              onChange={(e)=>setContent(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg outline-none"
            ></textarea>
          </div>
          
          <motion.button
            initial={false}
            whileTap={{scale:0.97}}
            className="w-full bg-black text-white py-2 sm:py-2.5 text-sm font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200"
            onClick={handleBlogPost}
          >
            Publish Blog
          </motion.button>
        </div>
      </div>
    </div>
  );
};