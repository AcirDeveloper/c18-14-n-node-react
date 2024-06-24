'use client'
import { useState } from 'react'
import MyButton from '../Buttons/MyButton'
import { Alert } from '../Alerts/Alert'

const BalanceCard = () => {
	const [isAlertOpen, setIsAlertOpen] = useState(false)

	const onChargeBalance = () => {
		setIsAlertOpen(true)
	}

	const handleCloseAlert = () => {
		setIsAlertOpen(false)
	}

	const onVerifyAccount = () => {
		console.log('Verificar cuenta')
	}

	return (
		<div
			className='bg-neutral-100  flex flex-col gap-3  border-l-3 border-b-4 w-full h-full rounded-2xl p-5'
			style={{ boxShadow: '-3px 8px 4px 0px rgba(0, 0, 0, 0.25);' }}
		>
			<div className='flex items-center justify-start gap-3'>
				<h1 className=' text-blue-800 text-3xl'>Saldo</h1>
				<h2 className=' text-green-600 text-xl '>^0.00%</h2>
			</div>
			<h2 className='text-right text-zinc-800 text-5xl font-medium leading-10 pt-4 pb-4'>$00,00</h2>
			<div className='flex items-center justify-end gap-1'>
				<MyButton text='Cargar Saldo' fontWeight='text-sm' onClick={onChargeBalance} />
				<MyButton text='Retirar' whitBorder={true} bgColor='bg-neutral-100' fontWeight='text-sm' />
			</div>
			<Alert isOpen={isAlertOpen} onClose={handleCloseAlert} onClick={onVerifyAccount} />
		</div>
	)
}
export default BalanceCard
