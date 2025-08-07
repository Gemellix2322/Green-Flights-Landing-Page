// /components/Typewriter.js
'use client';

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.01 * i },
  }),
};

const childVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Typewriter({ parts, className }) {

  const characters = parts.flatMap(part =>
    Array.from(part.text).map(char => ({
      char: char,
      className: part.className,
    }))
  );

  return (
    <motion.h1
      className={`${className} flex flex-wrap`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((character, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className={character.className}
        >
          {character.char === " " ? "\u00A0" : character.char}
        </motion.span>
      ))}
    </motion.h1>
  );
}