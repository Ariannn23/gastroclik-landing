"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar el fondo del Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-md py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-gastro-wine-main cursor-pointer flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gastro-wine-main to-gastro-gold-main shadow-lg"></div>
          GastroClick
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="text-gastro-text-sec hover:text-gastro-wine-main transition-colors">Características</a>
          <a href="#" className="text-gastro-text-sec hover:text-gastro-wine-main transition-colors">Plantillas</a>
          <a href="#" className="text-gastro-text-sec hover:text-gastro-wine-main transition-colors">Precios</a>
          
          <button className="cursor-pointer bg-gradient-to-r from-gastro-wine-main to-gastro-wine-sec text-white px-6 py-2.5 rounded-xl hover:shadow-[0_8px_20px_-6px_rgba(90,22,23,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 font-bold">
            Ingresar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gastro-wine-main p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-t border-gray-100 shadow-2xl absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6"
        >
          <a href="#" className="text-gastro-text-main font-bold text-lg">Características</a>
          <a href="#" className="text-gastro-text-main font-bold text-lg">Plantillas</a>
          <a href="#" className="text-gastro-text-main font-bold text-lg">Precios</a>
          <button className="bg-gastro-wine-main text-white px-8 py-3 rounded-xl font-bold w-[80%] shadow-lg">
            Ingresar
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
