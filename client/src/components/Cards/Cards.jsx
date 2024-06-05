import { Card } from '@nextui-org/react'

const Cards = ({
	bg_color = 'bg-blue-950',
	width = 'w-full',
	height = 'h-[513px]',
	additionalClasses = '',
	children,
}) => {
	return (
		<Card
			className={`flex flex-col justify-center items-center lg:z-10 ${width} ${height} ${bg_color} rounded-bl-none rounded-br-none md:rounded-[38px] shadow-2xl ${additionalClasses}`}
		>
			{children}
		</Card>
	)
}

export default Cards
