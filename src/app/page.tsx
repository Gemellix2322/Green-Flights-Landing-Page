'use client'
import Image from "next/image";
import Typewriter from '../components/animations/Typewriter'

import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/logo.svg'
import Link from "next/link";

import AboutUs from "@/components/sections/aboutUs";
import Footer from "@/components/sections/footer";
import Prices from "@/components/sections/prices";
import { useState } from "react";
import {motion} from 'framer-motion'

export default function Home() {

  const titleParts = [
    { text: "Green Flights ", className: "text-green-500" },
    { text: "Voandopara um futuro mais ", className: "" }, // Classe vazia para o estilo padrão
    { text: "verde!", className: "text-green-500" },
  ];

  const navLinks = [
    { href: "#precos", text: "Preços" },
    { href: "#sobre", text: "Sobre" },
    { href: "#blog", text: "Blog" },
    { href: "/", text: "Começar"},
  ];

  // Estado para controlar qual link está ativo (hover)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <main>
      <nav className="sticky top-0 z-50 w-full flex items-center justify-between p-4 bg-white shadow-md">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
          <Link href={"/"}>
            <Image className="h-14 w-14" src={logoSvg} alt="Logo marca da Green Flights" />
          </Link>
          <div
            onMouseLeave={() => setHoveredLink(null)}
            className="flex gap-2 items-center bg-stone-200 p-2 rounded-full"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.text}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.text)} 
              >
                <Link
                  href={link.href}
                  className="relative z-10 block px-5 py-2 font-medium text-stone-700 transition-colors duration-300 hover:text-white"
                >
                  {link.text}
                </Link>

                {hoveredLink === link.text && (
                  <motion.div
                    layoutId="pill" 
                    className="absolute inset-0 bg-green-500 rounded-full"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
      <section id="green" className="p-8 mx-auto flex w-full h-screen max-w-screen-2xl flex-col mt-24" style={{ height: 'calc(80vh)' }}>
        <div className="flex max-w-screen-xl items-center justify-between mx-auto">
          <div>
            <Typewriter
                className="font-black text-7xl"
                parts={titleParts}
              />
            <p className="mt-8 text-lg font-bold text-stone700">
              Nunca foi tão fácil economizar numa viagem.
              <br /> Faça tudo de forma fácil e rápida!
            </p>
          </div>
          <div>
            <Image
              className="max-w-2xl"
              src={airplaneSvg}
              alt="Ilustração de uma avião dando a volta ao Mundo" />
          </div>
        </div>
        <Link href={"#green"} className="mx-auto w-fit border-collapse px-5 py-3 bg-green-500 font-medium text-white hover:bg-green-700 transition-colors rounded-full">Faça seu Cadastro</Link>
      </section>
      <section id="sobre">
        <AboutUs/>
      </section>
      <section id='preços'>
          <Prices/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    </main>
  );
}
