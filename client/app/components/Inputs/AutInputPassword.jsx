'use client'
import { useState } from 'react'
import Image from 'next/image'
import images from '../../utils/Images'

export default function AuthInputPassword({ label, name, type }) {
	const [visible, setVisible] = useState(false)
	return (
		<>
			<div className='relative'>
				<input
					type={visible ? 'text' : 'password'}
					name={name}
					className='w-[246.66px] flex-col justify-start h-14 text-start font-normal p-4 rounded-[20px] border border-neutral-100 bg-inherit text-neutral-100'
				/>
				<label
					htmlFor={name}
					className='absolute top-[-15px] left-4 text-neutral-100 bg-blue-950 text-sm p-1 font-normal'
				>
					{label}
				</label>
				<button
					type='button'
					onClick={() => setVisible(!visible)}
					className='absolute right-4 top-5'
				>
					{visible ? (
						<Image src={images.eyeOff} alt='Show password' width={20} height={20} />
					) : (
						<Image src={images.eyeOn} alt='Hide password' width={20} height={20} />
					)}
				</button>
			</div>
		</>
	)
}
