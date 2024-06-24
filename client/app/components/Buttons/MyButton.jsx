'use client'

import { Button } from '@nextui-org/react'

export default function MyButton({
	text = '',
	whitBorder = false,
	bgColor = 'bg-[#F6A028]',
	colorText = 'text-black',
	fontWeight = 'font-bold',
	onClick = () => {},
}) {
	const classBorder = whitBorder ? 'border-2 border-amber-400' : ''

	return (
		<Button
			onPress={onClick}
			radius='full'
			variant={`${whitBorder ? 'bordered' : ''}`}
			className={`${bgColor} ${colorText} ${classBorder} ${fontWeight} `}
		>
			{text}
		</Button>
	)
}
