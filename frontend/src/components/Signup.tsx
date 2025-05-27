import { motion } from "motion/react";

export const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <div
        style={{ boxShadow: "var(--shadow-input)" }}
        className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-100"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-black mb-2">
          Sign Up
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-light text-center text-gray-600 mb-4 sm:mb-6">
          Sign up to start writing your thoughts!
        </p>
        
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john@gmail.com"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none "
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg outline-none "
            />
          </div>
          
          <motion.button
            initial={false}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-black text-white font-semibold py-2 sm:py-2.5 rounded-lg transition duration-200 hover:opacity-90"
          >
            Sign Up
          </motion.button>
        </div>
        
        <p className="text-xs sm:text-sm text-center text-gray-600 mt-4 sm:mt-5">
          Already have an account?{" "}
          <a href="#" className="text-black font-medium underline hover:text-gray-800 transition">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};