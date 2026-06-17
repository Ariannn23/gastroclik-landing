"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Layout, Sparkles, Tag, ChefHat } from "lucide-react";
import ICONLOGO from "@/public/images/ICONLOGO.png";
import Image from "next/image";

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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-extrabold text-gastro-wine-main cursor-pointer flex items-center gap-3 group"
        >
          <Image src={ICONLOGO} alt="GastroClick Logo" width={28} height={28} />
          <h1 className="tracking-tight">GastroClick</h1>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-bold">
          <a
            href="#"
            className="flex items-center gap-2 text-gastro-text-main/70 hover:text-gastro-wine-main transition-all hover:-translate-y-0.5 group"
          >
            <Sparkles className="w-4 h-4 group-hover:text-gastro-wine-main transition-colors" />
            Características
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gastro-text-main/70 hover:text-gastro-wine-main transition-all hover:-translate-y-0.5 group"
          >
            <Layout className="w-4 h-4 group-hover:text-gastro-wine-main transition-colors" />
            Plantillas
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gastro-text-main/70 hover:text-gastro-wine-main transition-all hover:-translate-y-0.5 group"
          >
            <Tag className="w-4 h-4 group-hover:text-gastro-wine-main transition-colors" />
            Precios
          </a>

          <button className="cursor-pointer bg-gradient-to-r from-gastro-wine-main to-gastro-wine-sec text-white px-7 py-3 rounded-xl hover:shadow-[0_10px_25px_-8px_rgba(90,22,23,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 font-extrabold flex items-center gap-2">
            Ingresar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gastro-wine-main p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white/95 backdrop-blur-3xl border-t border-gray-100 shadow-2xl absolute top-full left-0 w-full flex flex-col items-center py-8 gap-8"
        >
          <a
            href="#"
            className="flex items-center gap-3 text-gastro-text-main font-extrabold text-xl"
          >
            <Sparkles className="text-gastro-gold-main" /> Características
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-gastro-text-main font-extrabold text-xl"
          >
            <Layout className="text-gastro-gold-main" /> Plantillas
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-gastro-text-main font-extrabold text-xl"
          >
            <Tag className="text-gastro-gold-main" /> Precios
          </a>
          <button className="bg-gradient-to-r from-gastro-wine-main to-gastro-wine-sec text-white px-8 py-4 rounded-2xl font-extrabold w-[85%] shadow-lg mt-4 text-lg cursor-pointer">
            Ingresar
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
