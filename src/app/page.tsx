'use client'
import Image from "next/image";
import Typewriter from '../components/animations/Typewriter'

import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/logo.svg'
import Link from "next/link";

import AboutUs from "@/components/sections/aboutUs";
import Footer from "@/components/sections/footer";

export default function Home() {

  const titleParts = [
    { text: "Green Flights", className: "text-green-500" },
    { text: " Voando para um futuro mais ", className: "" }, // Classe vazia para o estilo padrão
    { text: "verde!", className: "text-green-500" },
  ];

  return (
    <main>
      <nav className="sticky top-0 z-50 w-full flex items-center justify-between p-4 bg-white shadow-md">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
          <Link href={"/"}>
            <Image className="h-14 w-14" src={logoSvg} alt="Logo marca da Green Flights" />
          </Link>
          <div className="flex gap-6 items-center">
            <Link href={"#precos"} className="font-medium text-stone-700 hover:text-green-500 transition-colors">Preços</Link>
            <Link href={"#sobre"} className="font-medium text-stone-700 hover:text-green-500 transition-colors">Sobre</Link>
            <Link href={"#blog"} className="font-medium text-stone-700 hover:text-green-500 transition-colors">Blog</Link>
            <Link href={"#comecar"} className="border-collapse px-5 py-3 bg-green-500 font-medium text-white hover:bg-green-700 transition-colors rounded-full">Começar</Link>
          </div>
        </div>
      </nav>
      <section id="green" className="p-8 mx-auto flex w-full h-screen max-w-screen-2xl flex-col">
        <div className="flex max-w-screen-xl items-center justify-between mt-8 mx-auto">
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
      <section id='footer'>
        <Footer/>
      </section>
    </main>
  );
}
