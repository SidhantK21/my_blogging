import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Home,
  Info,
  HelpCircle,
  Mail,
  Menu,
  X
} from "lucide-react";

export const Navbar = () => {
  const navItems = [
    { title: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { title: "About", href: "/about", icon: <Info className="w-4 h-4" /> },
    { title: "FAQs", href: "/faqs", icon: <HelpCircle className="w-4 h-4" /> },
    { title: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="py-4 px-4 relative">
      {/* Desktop Navigation */}
      <nav
        className="max-w-4xl mx-auto backdrop-blur-3xl border border-gray-200 rounded-xl px-1 py-1 shadow-md hidden md:flex justify-between items-center"
      >
        {navItems.map((item, idx:any) => (
          <div
            key={item.title}
            className="relative flex-1 text-center"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  layoutId="hover-desktop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.2,
                  }}
                  className="absolute inset-0 rounded-xl bg-black"
                />
              )}
            </AnimatePresence>

            <a
              href={item.href}
              className="relative z-10 py-3 px-3 transition-all duration-200 flex items-center justify-center"
            >
              <span
                className={`mr-2 ${hovered === idx ? "text-white" : "text-gray-800"}`}
              >
                {item.icon}
              </span>
              <span
                className={`text-sm font-medium tracking-wide ${
                  hovered === idx ? "text-white" : "text-gray-800"
                }`}
              >
                {item.title}
              </span>
            </a>
          </div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden max-w-4xl mx-auto">
        <div className="flex justify-between items-center bg-gray-100 rounded-xl px-4 py-3 shadow-md">
          <a href="/" className="text-gray-800 flex items-center">
            <span className="nova-square-regular">shareIt</span>
          </a>
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-3xl rounded-b-xl shadow-lg mt-1 overflow-hidden"
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="flex items-center border-2 px-4 py-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="bg-gray-100 p-2 rounded-lg mr-3">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;