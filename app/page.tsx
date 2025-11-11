"use client";
import Link from "next/link";
import { poppins } from "./fonts";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={`${poppins.className} min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mockup-phone border-primary shadow-2xl shadow-blue-800/40"
      >
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display bg-gradient-to-b from-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-6"
          >
            Fit By Mr
          </motion.h1>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/fit">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold text-lg shadow-lg hover:shadow-cyan-400/30 transition-all duration-300">
                Let’s Go →
              </button>
            </Link>
          </motion.div>
        </div>



        
      </motion.div>
    </div>
  );
}