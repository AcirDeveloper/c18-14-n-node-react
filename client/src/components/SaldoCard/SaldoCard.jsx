const SaldoCard = () => {
    return (
        <div className="bg-slate-100  flex flex-col w-1/3 md:ml-60 h-40 rounded-2xl">
            <div className="flex md:mt-4 items-center">
                <h1 className=" md:ml-5  text-blue-800 text-3xl">Saldo</h1>
                <h2 className=" md:ml-3 text-green-600 text-xl ">^0.00%</h2>
            </div>
            <h2 className="text-3xl md:ml-80 md:mt-2">$00,00</h2>
            <div className="flex items-center justify-end md:mr-6 md:mt-2">
                <button className="bg-amber-500 py-1  px-3 rounded-2xl md:mt-2 md:mr-0">Cargar Saldo</button>
                <button className="bg-white border-solid border-amber-500 border-1 md:py-1 px-3 rounded-2xl md:mt-2 md:ml-2">Retirar</button>
            </div>
        </div>
    )
}
export default SaldoCard