"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
const MyActivities = () => {

	const columns = [
		{
		  key: "date",
		  label: "Fecha"
		},
		{
		  key: "contact",
		  label: "Contacto"
		},
		{
		  key: "transaction",
		  label: "Transacción"
		},
		{
		  key: "status",
		  label: "Estado"
		},
		{
		  key: "amount",
		  label: "Cantidad"
		},
		{
		  key: "detail",
		  label: "Detalle"
		}
	];

	return (
		<Table aria-label="Example empty table" 
		classNames={{
			base: "h-full",
			table: "h-max-[490px] w-full bg-[#D8E6FE] rounded-lg shadow-lg overflow-y-scroll",
			thead: "max-h-[490px]"
		  }}
		>
			<TableHeader columns={columns}>
				{(column) => <TableColumn key={column.key} className="bg-[#112F63] max-h-[490px] text-white">{column.label}</TableColumn>}
			</TableHeader>
			<TableBody emptyContent={"Todavía no has realizado ninguna transacción"}>{[]}</TableBody>
		</Table>
	)
}
export default MyActivities
