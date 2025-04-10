import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Home,
  Info,
  HelpCircle,
  Mail,
} from "lucide-react"; // Lucide icons

export const Navbar = () => {
  const navItems = [
    { title: "Home", href: "/", icon: <Home className="w-4 h-4 mr-2" /> },
    { title: "About", href: "/about", icon: <Info className="w-4 h-4 mr-2" /> },
    { title: "FAQs", href: "/faqs", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
    { title: "Contact", href: "/contact", icon: <Mail className="w-4 h-4 mr-2" /> },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-6 px-4">
      <nav
        style={{ boxShadow: "var(--shadow-input)" }}
        className="max-w-xl mx-auto bg-gray-100 rounded-xl px-2 py-2 flex justify-between items-center"
      >
        {navItems.map((item, idx) => (
          <div
            key={item.title}
            className="relative flex-1 text-center"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  layoutId="hover"
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
              className="relative z-10  py-2 px-3 transition-all duration-200 flex items-center justify-center"
            >
              <span
                className={`mr-2 ${hovered === idx ? "text-white" : "text-gray-800"}`}
              >
                {item.icon}
              </span>
              <span
                className={`text-sm sm:text-base font-medium tracking-wide ${
                  hovered === idx ? "text-white" : "text-gray-800"
                }`}
              >
                {item.title}
              </span>
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
