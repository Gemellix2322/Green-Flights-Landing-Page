import Image from "next/image"
import aboutSvg from '../../assets/aboutus.svg'

export default function AboutUs() {
    return (
        <div className="w-full bg-green-50 py-24 px-8 flex items-center h-full">
            <div>
          <Image className="max-w-2xl" src={aboutSvg} alt="Pessoas planejando"/>
        </div>
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-y-8">
          <h2 className="text-4xl font-black text-stone-800">
            Viajar pode ser fácil, acessível e <span className="text-green-500">consciente.</span>
          </h2>
          <p className="max-w-4xl text-center text-lg text-stone-600">
            Na <span className="font-bold">Green Flights</span>, nossa missão é revolucionar o seu jeito de viajar. Acreditamos que explorar o mundo não precisa ser complicado nem caro. Usamos tecnologia de ponta para encontrar as melhores tarifas e rotas, simplificando todo o processo de planejamento para você. Mais do que apenas voos, promovemos um turismo mais sustentável, para que você possa criar memórias inesquecíveis enquanto cuida do nosso planeta.
          </p>

        </div>
        </div>
    )
}