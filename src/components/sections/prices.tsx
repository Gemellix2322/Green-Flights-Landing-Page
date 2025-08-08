export default function Prices() {
    return (
        // Container principal com um fundo suave e centralização dos itens
        <div className="w-full min-h-screen bg-gray-50 py-24 px-8 flex flex-wrap gap-10 justify-center items-center">

            {/* --- Plano Básico: Nuvem Leve --- */}
            <div className="bg-stone-100 rounded-3xl p-8 flex flex-col items-center text-center w-full max-w-sm space-y-6 shadow-lg transition-transform hover:scale-105">
                <h2 className="text-3xl font-bold text-stone-800">Nuvem Leve ☁️</h2>
                <p className="text-5xl font-extrabold text-stone-900">R$ 199<span className="text-lg font-medium text-stone-500">/trecho</span></p>
                <ul className="space-y-3 text-stone-600 text-left">
                    <li>✔️ 1 item pessoal (mochila ou bolsa)</li>
                    <li>✔️ Check-in online</li>
                    <li>✔️ Assento atribuído aleatoriamente</li>
                </ul>
                <button className="w-full bg-stone-400 text-white font-bold hover:bg-green-500 transition-colors px-6 py-3 rounded-full mt-4">
                    Selecionar Plano
                </button>
            </div>

            {/* --- Plano Popular: Voo Flex --- */}
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center w-full max-w-sm space-y-6 shadow-2xl border-4 border-green-500 relative transition-transform hover:scale-105">
                <div className="absolute -top-5 bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">MAIS POPULAR</div>
                <h2 className="text-3xl font-bold text-green-800">Voo Flex ✨</h2>
                <p className="text-5xl font-extrabold text-green-900">R$ 349<span className="text-lg font-medium text-stone-500">/trecho</span></p>
                <ul className="space-y-3 text-stone-600 text-left">
                    <li>✔️ 1 item pessoal + 1 mala de mão</li>
                    <li>✔️ Marcação de assento padrão</li>
                    <li>✔️ 1ª alteração de voo grátis</li>
                    <li>✔️ Embarque prioritário (Grupo 2)</li>
                </ul>
                <button className="w-full bg-green-500 text-white font-bold hover:bg-green-600 transition-colors px-6 py-3 rounded-full mt-4">
                    Selecionar Plano
                </button>
            </div>

            {/* --- Plano Premium: Céu Diamante --- */}
            <div className="bg-stone-100 rounded-3xl p-8 flex flex-col items-center text-center w-full max-w-sm space-y-6 shadow-lg transition-transform hover:scale-105">
                <h2 className="text-3xl font-bold text-stone-800">Céu Diamante 💎</h2>
                <p className="text-5xl font-extrabold text-stone-900">R$ 899<span className="text-lg font-medium text-stone-500">/trecho</span></p>
                <ul className="space-y-3 text-stone-600 text-left">
                    <li>✔️ Bagagem completa inclusa</li>
                    <li>✔️ Assento conforto e refeição completa</li>
                    <li>✔️ Alterações e reembolso sem custo</li>
                    <li>✔️ Acesso à Sala VIP e embarque exclusivo</li>
                </ul>
                <button className="w-full bg-stone-400 text-white font-bold hover:bg-green-500 transition-colors px-6 py-3 rounded-full mt-4">
                    Selecionar Plano
                </button>
            </div>

        </div>
    )
}