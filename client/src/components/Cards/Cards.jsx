import { Card } from '@nextui-org/react'

const Cards = ({
	color = 'bg-blue-950',
	width = 'w-full',
	height = 'h-[513px]',
	additionalClasses = '',
	children,
}) => {
	return (
		<Card
			className={`flex flex-col justify-center items-center lg:z-10 ${width} ${height} ${color} rounded-bl-none rounded-br-none md:rounded-[38px] shadow-2xl ${additionalClasses}`}
		>
			{children}
		</Card>
	)
}

export default Cards
