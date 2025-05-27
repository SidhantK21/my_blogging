import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState <Number|null> (null);
  const navigate=useNavigate();

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why should I start writing on this platform?",
      answer: "Our platform offers a clean, distraction-free environment that puts your content front and center. With our minimalist black and white design, readers can focus entirely on your ideas and storytelling without visual noise. We also provide powerful tools for writers, a supportive community, and extensive reach to help your voice be heard."
    },
    {
      question: "What makes this blogging platform different?",
      answer: "Unlike other platforms cluttered with advertisements and distracting elements, our black and white theme creates a premium reading experience similar to traditional print media. This elegant simplicity not only enhances readability but also gives your work a timeless, professional appearance that stands out in today's colorful digital landscape."
    },
    {
      question: "Can I customize my blog while maintaining the theme?",
      answer: "Absolutely! While we maintain the sophisticated black and white aesthetic across the platform, you have numerous customization options including typography choices, layout preferences, and subtle design elements. This allows you to express your unique voice while benefiting from our refined, reader-focused design philosophy."
    },
    {
      question: "Will my content reach a wider audience?",
      answer: "Yes! Our platform is optimized for discoverability. The clean black and white design improves readability and engagement metrics, which boosts your content in search rankings. Additionally, we have a built-in network of dedicated readers who appreciate thoughtful content presented in our distinctive, distraction-free style."
    },
    {
      question: "How does the minimalist design benefit my writing?",
      answer: "Our black and white theme eliminates visual distractions, allowing readers to fully immerse themselves in your words. Research shows that high-contrast, clean designs improve reading comprehension and retention. This means your ideas will be better understood and remembered. The elegant simplicity also conveys professionalism and trustworthiness, enhancing your credibility as a writer."
    }
  ];

  return (
    <div className="w-full bg-white py-10 sm:py-16 md:py-20 lg:py-10">
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
                Why Write With Our <span className="italic">Black & White</span> Theme?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl">
                Discover the advantages of our minimalist approach to content presentation.
              </p>
            </div>
           
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                >
                  <span className="font-medium text-base sm:text-lg text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    <motion.svg
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
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
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 max-w-md">Reach out to our support team or explore our comprehensive knowledge base.</p>
            </div>
            <motion.button
              onClick={()=>{
                navigate("/write");
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-black text-white font-medium tracking-wide rounded-lg hover:bg-gray-900 transition-all duration-200"
            >
              Try writing and find out !
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;