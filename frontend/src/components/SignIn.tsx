import { motion } from "motion/react";

export const SignIn=()=>{
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div
            style={{ boxShadow: "var(--shadow-input)" }}
          className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl ">
            <h2 className="text-2xl font-bold text-center mb-3 text-black ">
              Sign In
            </h2>
            <h2 className="text-sm sm:text-base font-light text-center mb-5 tracking-tighter antialiased">
              Sign in to your account to resume reading and writing !
            </h2>
    
            <div className="space-y-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg outline-none"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg outline-none"
                />
              </div>
    
              <motion.button
                initial={false}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-black text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Sign In
              </motion.button>
            </div>
    
            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      );
}