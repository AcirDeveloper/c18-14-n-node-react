import React from "react";
import {Button} from "@nextui-org/react"

export const ButtonOrange = ({text})=>{

    return (
        <Button color="warning" className="font-medium" >
            {text}
        </Button>
    )
}