import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

export const BalanceStatistics=()=>{
    return (
        <div className="w-full h-full pl-3 pr-3 pt-5 flex flex-col gap-4 bg-neutral-100 rounded-2xl"
             style={{ boxShadow: '-3px 8px 4px 0px rgba(0, 0, 0, 0.25);' }}>
            <div className="w-full flex flex-col gap-10">
                <div className="w-full flex justify-center items-center gap-10">
                    <h1 className="text-blue-950 text-3xl font-semibold leading-10">Balance</h1>
                    <span className="text-center text-black text-base leading-normal">Mayo, 2024</span>
                </div>
                <div className="w-full flex justify-center gap-24">
                    <div className="flex flex-col items-center">
                        <FaArrowTrendUp className="text-[#0F9446] font-bold text-6xl"/>
                        <p className="text-center text-blue-950 text-2xl font-medium">Ganancias</p>
                        <p className="text-center flex gap-1 items-center justify-center">
                            <span className="text-zinc-800 text-base font-medium leading-snug">$</span>
                            <span className="text-zinc-800 font-medium leading-9 text-2xl">00,</span>
                            <span className="text-zinc-800 text-base font-medium leading-snug">00</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaArrowTrendDown className="text-[#FF0000] text-6xl"/>
                        <p className="text-center text-blue-950 text-2xl font-medium">Pérdidas</p>
                        <p className="text-center flex gap-1 items-center justify-center">
                            <span className="text-zinc-800 text-base font-medium leading-snug">$</span>
                            <span className="text-zinc-800 font-medium leading-9 text-2xl">00,</span>
                            <span className="text-zinc-800 text-base font-medium leading-snug">00</span>
                        </p>
                    </div>
                </div>
            </div>
            {/*Charts  */}
            <div>
                charts
            </div>
        </div>
    )
}