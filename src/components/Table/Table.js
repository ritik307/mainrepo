import { useState } from "react";

import { Body, TableBody, Td, Th } from "./styles";

const Table = () =>{
    const [data,fillData]=useState([
        {
            "id": "1",
            "name": "India",
            "downloads": "38952"
        },
        {
            "id": "2",
            "name": "Indonesia",
            "downloads": "23970"
        },
        {
            "id": "3",
            "name": "United States",
            "downloads": "17918"
        },
        {
            "id": "4",
            "name": "Brazil",
            "downloads": "17918"
        }
    ])
    const fillTable=()=>{
        const rows= data.map((entry)=>{
            return (
                <tr>
                    <Td>{entry.id}</Td>
                    <Td>{entry.name}</Td>
                    <Td>{entry.downloads}</Td>
                </tr>
            )
        })
        return rows;
    }

    return (
        <Body>
            <TableBody>
                <tr>
                    <Th>Serail No.</Th>
                    <Th>Country Name</Th>
                    <Th>Downloads</Th>
                </tr>
                {fillTable()}
            </TableBody>
        </Body>
    )
}
export default Table;