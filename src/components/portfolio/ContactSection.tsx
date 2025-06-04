"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from './SectionHeader';

export default function ContactSection() {
  return (
    <motion.section
      id="contatti"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          heading="Iniziamo un progetto insieme"
          description="Sei pronto a dare vita alla tua idea? Creiamo qualcosa di straordinario insieme..."
          tagIcon='solar:chat-line-bold'
          tagText='Contatti'
          centered={true}
        />

        {/* Contact Form */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://tidycal.com/carloangeletti/meet30"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                target="_blank"
              >
                <Icon icon="solar:letter-outline" width={18} height={18} />
                Prenota una call
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://humans.tech"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                target="_blank"
              >
                <Icon icon="solar:earth-broken" width={18} height={18} />
                Humans.tech
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}