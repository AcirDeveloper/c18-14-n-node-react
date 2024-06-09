export default function AuthInput({ label, type, name }) {
	return (
		<>
			<div className='relative'>
				<input
					type={type}
					name={name}
					className='w-[246.66px] flex-col justify-start h-14 text-start font-normal p-4 rounded-[20px] border border-neutral-100 bg-inherit text-neutral-100'
				></input>
				<label
					htmlFor={name}
					className=' absolute top-[-15px] left-4 text-neutral-100 bg-blue-950 text-sm p-1 font-normal'
				>
					{label}
				</label>
			</div>
		</>
	)
}
