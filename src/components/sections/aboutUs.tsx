'use client'

import Image from "next/image"
import { motion } from "framer-motion" 
import aboutSvg from '../../assets/aboutus.svg'
import Typewriter from "../animations/Typewriter"

export default function AboutUs() {

    const text = [{text: " Na Green Flights, nossa missão é revolucionar o seu jeito de viajar. Acreditamos que explorar o mundo não precisa ser complicado nem caro. Usamos tecnologia de ponta para encontrar as melhores tarifas e rotas, simplificando todo o processo de planejamento para você. Mais do que apenas voos, promovemos um turismo mais sustentável, para que você possa criar memórias inesquecíveis enquanto cuida do nosso planeta."}]

    return (
        <div className="w-full bg-green-50 py-24 px-8 flex flex-wrap items-center justify-center min-h-screen gap-x-16">
            
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }} 
            >
                <Image className="max-w-lg" src={aboutSvg} alt="Pessoas planejando" />
            </motion.div>

            <div>
            <motion.div
                className="flex max-w-2xl flex-col items-center gap-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }} 
            >
                <h2 className="text-4xl font-black text-stone-800 text-center">
                    Viajar pode ser fácil, acessível e <span className="text-green-500">consciente.</span>
                </h2>
                </motion.div>
                <Typewriter parts={text} className="max-w-4xl text-center text-lg text-stone-600"/>
            </div>
        </div>
    )
}