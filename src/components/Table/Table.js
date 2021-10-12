import { useRef, useState } from "react";

import { Body, TableBody, Td, Th } from "./styles";

const Table = (props) =>{

    let index=1;
    
    const fillTable=()=>{
        const rows= props.data.slice(0,20).map((entry)=>{
            return (
                <tr key={index}>
                    <Td>{index++}</Td>
                    <Td>{entry[0]}</Td>
                    <Td>{entry[1]}</Td>
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