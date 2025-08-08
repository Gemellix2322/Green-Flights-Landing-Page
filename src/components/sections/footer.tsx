// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import logoSvg from '../../assets/logo.svg'; 

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-stone-800 text-white py-16 px-8">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          
          <div className="md:col-span-1">
            <Link href={"/"}>
              <Image className="h-14 w-14" src={logoSvg} alt="Logo marca da Green Flights" />
            </Link>
            <p className="mt-4 text-stone-400 text-sm">
              Voando para um futuro mais verde.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Empresa</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="#sobre" className="text-stone-400 hover:text-green-500 transition-colors">Sobre Nós</Link></li>
              <li><Link href="#blog" className="text-stone-400 hover:text-green-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-green-500 transition-colors">Carreiras</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Suporte</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" className="text-stone-400 hover:text-green-500 transition-colors">Fale Conosco</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-green-500 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-green-500 transition-colors">Termos de Serviço</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-green-500 transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          
          <div>
             <h3 className="font-bold text-lg">Junte-se a nós</h3>
             <p className="mt-4 text-stone-400 text-sm">Receba as melhores ofertas e novidades sobre viagens sustentáveis.</p>
             <div className="mt-4 flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full rounded-md border-0 bg-stone-700 px-3 py-2 text-white placeholder-stone-400 focus:ring-2 focus:ring-green-500"
                />
                <button className="rounded-md bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600 transition-colors">
                  Inscrever
                </button>
             </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 text-center">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Green Flights. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}