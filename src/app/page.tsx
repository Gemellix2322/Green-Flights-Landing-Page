import Image from "next/image";

import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/logo.svg'
import Link from "next/link";


export default function Home() {
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
      <section id="green"  className="p-8 mx-auto flex w-full h-screen max-w-screen-2xl flex-col">
        <div className="flex max-w-screen-xl items-center justify-between mt-8 mx-auto">
          <div>
            <h1
              className="font-black text-7xl">
              <span className="text-green-500">Green Flights</span> Voando para um futuro mais <span className="text-green-500">verde!</span>
            </h1>
            <p className="mt-8 text-lg font-bold text-stone700">
              Nunca foi tão fácil economizar numa viagem.
              <br/> Faça tudo de forma fácil e rápida!
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
      <section id="sobre" className="w-full bg-green-50 py-24 px-8">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-y-8">
          <h2 className="text-4xl font-black text-stone-800">
            Viajar pode ser fácil, acessível e <span className="text-green-500">consciente.</span>
          </h2>
          <p className="max-w-4xl text-center text-lg text-stone-600">
            Na <span className="font-bold">Green Flights</span>, nossa missão é revolucionar o seu jeito de viajar. Acreditamos que explorar o mundo não precisa ser complicado nem caro. Usamos tecnologia de ponta para encontrar as melhores tarifas e rotas, simplificando todo o processo de planejamento para você. Mais do que apenas voos, promovemos um turismo mais sustentável, para que você possa criar memórias inesquecíveis enquanto cuida do nosso planeta.
          </p>

        </div>
      </section>
      <section>

      </section>
    </main>
  );
}
