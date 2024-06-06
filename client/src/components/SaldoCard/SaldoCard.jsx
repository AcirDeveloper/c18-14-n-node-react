"use client"
import { useState } from "react";
import { OrangeButton } from "../Buttons/OrangeButton"
import { Alert } from "../Alerts/Alert";

const SaldoCard = () => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const onChargeBalance = () => {
        setIsAlertOpen(true);
    };

    const handleCloseAlert = () => {
        setIsAlertOpen(false);
    };

    const onVerifyAccount=()=>{
        console.log("Verificar cuenta")
    }

    return (
        <div className="bg-slate-100  flex flex-col border-solid border-l-3 border-b-4 border-slate-400 w-1/3 h-40 rounded-2xl">
            <div className="flex md:mt-4 items-center">
                <h1 className=" md:ml-5  text-blue-800 text-3xl">Saldo</h1>
                <h2 className=" md:ml-3 text-green-600 text-xl ">^0.00%</h2>
            </div>
            <h2 className="text-3xl text-right mr-6">$00,00</h2>
            <div className="flex items-center justify-end gap-1 md:mr-6 md:mt-2">
                <OrangeButton text="Cargar Saldo" fontWeight="text-sm" onClick={onChargeBalance}/>
                <OrangeButton text="Retirar" whitBorder={true} bgColor="bg-slate-100" fontWeight="text-sm"/>
            </div>
            <Alert isOpen={isAlertOpen} onClose={handleCloseAlert} onClick={onVerifyAccount}/>
        </div>
    )
}
export default SaldoCard