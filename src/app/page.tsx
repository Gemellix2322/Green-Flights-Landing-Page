import Image from "next/image";

import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/logo.svg'
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <section id="green"  className="p-8 mx-auto flex w-full h-screen max-w-screen-xl flex-col">
        <nav className="w-full flex items-center justify-between mt-5">
          <Link href={"/"}>
          <Image className="h-14 w-14" src={logoSvg} alt="Logo marca da Green Flights" />
          </Link>
          <div className=" flex gap-6 items-center">
            <Link href={"#green"} className="font-medium text-stone-700 hover:text-green-500 transition-colors">Preços</Link>
            <Link href={"#green"} className="font-medium text-stone-700 hover:text-green-500 transition-colors">Sobre</Link>
            <Link href={"#green"} className="font-medium text-stone-700 hover:text-green-500 transition-colors">Blog</Link>
            <Link href={"#green"} className="border-collapse px-5 py-3 bg-green-500 font-medium text-white hover:bg-green-700 transition-colors rounded-full">Começar</Link>
          </div>
        </nav>
        <div className="flex w-full items-center justify-between mt-8">
          <div>
            <h1
              className="text-left font-black text-7xl">
              <span className="text-green-500">Green Flights</span> Voando para um futuro mais <span className="text-green-500">verde.</span>
            </h1>
            <p className="mt-8 text-lg font-bold text-stone700">
              Nunca foi tão fácil economizar numa viagem.
              <br/> Faça tudo de forma fácil e rápida!
            </p>
          </div>
          <div>
            <Image
              className=" max-w-2xl"
              src={airplaneSvg}
              alt="Ilustração de uma avião dando a volta ao Mundo" />
          </div>
        </div>
        <Link href={"#green"} className="mx-auto w-fit border-collapse px-5 py-3 bg-green-500 font-medium text-white hover:bg-green-700 transition-colors rounded-full">Faça seu Cadastro</Link>
      </section>
    </main>
  );
}
