import React from 'react'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react'
import { OrangeButton } from '../Buttons/MyButton'
import images from '@/app/utils/Images'

export const Alert = ({ isOpen, onClick, onClose, title = '' }) => {
	const img = images.alertVerification
	return (
		<Modal backdrop='blur' isOpen={isOpen} onClose={onClose} className='bg-[#F5F5F5]'>
			<ModalContent>
				{onClose => (
					<>
						<ModalBody className='pt-12'>
							{title && <h1>{title}</h1>}
							<div className='w-full flex justify-center'>
								<img src={img} alt='alert' className='' />
							</div>
							<div className='w-full'>
								<p className='text-zinc-800 text-center text-xl font-normal leading-loose tracking-tight'>
									¡Verifica tu Cuenta y accede a todas las funcionalidades que te ofrece Boomerang!
								</p>
							</div>
						</ModalBody>
						<ModalFooter>
							<OrangeButton text='Verificar Cuenta' fontWeight='text-sm' onClick={onClick} />
							<OrangeButton
								text='Volver'
								whitBorder={true}
								bgColor='bg-slate-100'
								fontWeight='text-sm'
								onClick={onClose}
							/>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
