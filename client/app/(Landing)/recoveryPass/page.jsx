import Cards from '../../components/Cards/Cards'
import AuthInput from '../../components/Inputs/AuthInput'
import images from '../../utils/Images'
import MyButton from '../../components/Buttons/MyButton'
import Link from 'next/link'
import Image from 'next/image'

export default function RecoveryPass() {
	return (
		<div className='flex flex-col justify-end h-screen md:items-center md:justify-center'>
			<Cards width='w-full md:w-[900px]' height='h-[600px]'>
				<div className='flex w-full h-full'>
					<div className='flex-1 bg-blue-950 p-4 rounded-bl-[38px] flex flex-col justify-center items-center'>
						<h1 className='lg:w-[415px] lg:h-[58.41px] text-center text-neutral-100 text-[32px] font-medium leading-[38px] tracking-tight mb-5'>
							¡Hola!
						</h1>
						<h3 className='lg:w-[415px] lg:h-[58.41px] text-center text-neutral-100 text-[26px] font-normal leading-[38px] tracking-tight mb-5'>
							Recuperar Contraseña
						</h3>
						<form className='space-y-5'>
							<AuthInput label={'Correo Electrónico'} />
							<div className='flex justify-center'>
								<MyButton text={'Recuperar Contraseña'} />
							</div>
						</form>
						<p className='w-[320.55px] h-[28.18px] text-center text-neutral-100 text-lg font-normal leading-[10px] tracking-tight mt-10'>
							{' '}
							¿Ya tienes cuenta?
						</p>
						<Link
							href={'/login'}
							className='text-center text-neutral-100 text-lg font-normal leading-[10px] tracking-tight border-b-1 pb-1'
						>
							Inicia Sesión
						</Link>
					</div>
					<div className='w-[400px] bg-[#F5F5F5] p-4 rounded-br-[38px] flex flex-col space-y-5 justify-center items-center'>
						<Image
							src={`${images.security}`}
							alt='Imagen'
							width={4095}
							height={4096}
							className='object-contain rounded-br-[38px]'
						/>
						<p className='text-center text-zinc-800 text-[32px] font-medium leading-[38px] tracking-tight'>
							Tu inversión siempre vuelve a tus manos
						</p>
					</div>
				</div>
			</Cards>
			<div className=' absolute lg:z-0 w-full lg:h-[459.83px] bg-gradient-to-br from-green-500 to-blue-950'></div>
		</div>
	)
}
