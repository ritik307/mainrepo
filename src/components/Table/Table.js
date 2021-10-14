import { useEffect, useState } from "react";
import axios from "axios";
import { Body, TableContainer, Td, Th } from "./styles";

const Table = (props) => {

    const [isLoading] = useState(false);
    // const [data,setData] = useState(props.data);
    const [downloads, setDownloads] = useState([]);

    useEffect(() => {
        //console.log("useMemo",props.data)
        props.data.forEach((entry) => {
            console.log("here");
            const url = `https://sourceforge.net/projects/projectsakura/files/${entry.codename}/stats/json?start_date=2020-01-01&end_date=2022-01-01`;
            axios.get(url)
                .then((res) => {
                    const deviceTotal = res.data.total;
                    // console.log("device name: ",entry.name);
                    // console.log("deviceTotal: ",deviceTotal);
                    setDownloads(oldData => [...oldData, deviceTotal]);
                })
                .catch((err) => {
                    console.log("Error while fetching device download: ");
                    console.log(err);
                })

        })
    }, [props.data]);



    //? FILLING DEVICE
    const fillDeviceTable = () => {
        let index = 0;
        const rows = props.data.map((entry) => {
            const deviceTotal = downloads[index];
            const percent = ((deviceTotal * 100) / (props.total)).toFixed(2);

            return (
                <tr key={index++}>
                    <Td>{entry.name}</Td>
                    <Td>{deviceTotal}</Td>
                    <Td>{percent}</Td>
                </tr>
            )
        })
        return rows;
    }

    //? FILLING OS
    const fillOSTable = () => {
        let index = 1;
        const rows = props.data.map((entry) => {
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

    //? FILLING COUNTRY DATA 
    const fillCountryTable = () => {
        let index = 1;
        const rows = props.data.slice(0, 20).map((entry) => {

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


    const renderTable = () => {
        if (isLoading === true) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            if (props.type === "country") {
                return (
                    <TableContainer>
                        <tr>
                            <Th>Serial No.</Th>
                            <Th>Country Name</Th>
                            <Th>Downloads</Th>
                        </tr>
                        {fillCountryTable()}
                    </TableContainer>
                );
            }
            else if (props.type === "device") {
                return (
                    <TableContainer>
                        <tr>
                            <Th>Device Name</Th>
                            <Th>Downloads</Th>
                            <Th>Percentage</Th>
                            {/* <Th>Downloads</Th>
                            <Th>Percentage</Th> */}
                        </tr>
                        <tbody>
                            {fillDeviceTable()}    
                        </tbody>
                        
                    </TableContainer>
                )
            }
            else {
                return (
                    <TableContainer>
                        <tr>
                            <Th>Serial No.</Th>
                            <Th>Device Name</Th>
                            <Th>Downloads</Th>
                            {/* <Th>Downloads</Th>
                            <Th>Percentage</Th> */}
                        </tr>
                        <tbody>
                            {fillOSTable()}
                        </tbody>
                        
                    </TableContainer>
                )
            }
        }
    }
    return (
        <Body>
            {renderTable()}
        </Body>
    )
}
export default Table;