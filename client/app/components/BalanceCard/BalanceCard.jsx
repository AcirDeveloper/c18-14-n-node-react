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
			style={{ boxShadow: '-3px 8px 4px 0px rgba(0, 0, 0, 0.25);' }}
			className='bg-neutral-100  flex flex-col  border-l-3 border-b-4 w-1/3 h-40 rounded-2xl'
		>
			<div className='flex md:mt-4 items-center'>
				<h1 className=' md:ml-5  text-blue-800 text-3xl'>Saldo</h1>
				<h2 className=' md:ml-3 text-green-600 text-xl '>^0.00%</h2>
			</div>
			<h2 className='text-3xl text-right mr-6'>$00,00</h2>
			<div className='flex items-center justify-end gap-1 md:mr-6 md:mt-2'>
				<MyButton text='Cargar Saldo' fontWeight='text-sm' onClick={onChargeBalance} />
				<MyButton text='Retirar' whitBorder={true} bgColor='bg-neutral-100' fontWeight='text-sm' />
			</div>
			<Alert isOpen={isAlertOpen} onClose={handleCloseAlert} onClick={onVerifyAccount} />
		</div>
	)
}
export default BalanceCard
