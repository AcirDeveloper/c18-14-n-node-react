import React from 'react'
import { Button } from '@nextui-org/react'

export const ButtonOrange = ({ text, bg_color }) => {
	return (
		<Button color='warning' className={`font-medium $`}>
			{text}
		</Button>
	)
}
