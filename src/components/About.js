'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className='py-16'>
      <div className='text-center mt-5 container d-flex flex-column'>
        <h3 className=''>
          About Me
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mt-5'
        >
          <p className='fs-5'>
            <b>Hey, I'm Saad Mukhtar</b>, a frontend developer based in Lahore, Pakistan.
            I'm a passionate frontend developer who enjoys turning ideas into interactive, user-friendly websites. I focus on building clean, responsive designs and ensuring a smooth user experience.
            <br />With a strong understanding of modern web development practices, I believe in writing efficient, maintainable code and continuously improving my skills. Every project I work on is an opportunity to create something functional, beautiful, and meaningful.
            <br />
            I'm currently expanding my knowledge, exploring new tools and technologies, and looking forward to contributing to exciting projects that make a difference.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
