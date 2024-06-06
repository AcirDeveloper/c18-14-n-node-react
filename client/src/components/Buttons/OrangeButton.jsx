'use client'

import React from "react";
import {Button} from "@nextui-org/react"

export const OrangeButton = ({
    text='',
    whitBorder=false,
    bgColor = "bg-[#F6A028]",
    colorText="text-black",
})=>{
    const classBorder = whitBorder ? "border-2 border-amber-400" : ""
    
    return (
        <Button radius="full" variant={`${whitBorder ? "bordered" : ""}`}  className={`${bgColor} ${colorText} ${classBorder} font-bold`} >
            {text}
        </Button>
    )
}