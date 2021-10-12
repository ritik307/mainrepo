import { useState } from "react";
import axios from "axios";
import { Body, TableBody, Td, Th } from "./styles";

const Table = (props) => {

    const [isLoading, setLoading] = useState(false);

    const fetchDeviceData = (entry, index) => {
        const url = `https://sourceforge.net/projects/projectsakura/files/${entry.codename}/stats/json?start_date=2020-01-01&end_date=2022-01-01`
        let deviceTotal;
        axios.get(url)
            .then((res) => {
                deviceTotal = res.data.total;
                // console.log("total: ", typeof (deviceTotal));
                // console.log("props-total: ", typeof (props.total));
                const percent = ((deviceTotal * 100) / (props.total)).toFixed(2);
                // console.log("percent: ", percent);
                setLoading(false);
                return (
                    <tr key={index}>
                        <Td>{index++}</Td>
                        <Td>{entry.name}</Td>
                        {/* <Td>{deviceTotal}</Td> */}
                        {/* <Td>{percent}</Td> */}
                    </tr>
                )
            })
            .catch((err) => {
                console.log("Error occured in device: ");
                console.log(err);
            })
    }

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
    const fillDeviceTable = () => {
        let index = 1;
        const rows = props.data.map((entry) => {
            // let deviceData = fetchDeviceData(entry, index);
            // console.log("devicedata: ", deviceData);
            return (
                <tr key={index}>
                    <Td>{index++}</Td>
                    <Td>{entry.name}</Td>
                    <Td>{entry.brand}</Td>
                </tr>
            )
            // return deviceData;
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
                    <TableBody>
                        <tr>
                            <Th>Serial No.</Th>
                            <Th>Country Name</Th>
                            <Th>Downloads</Th>
                        </tr>
                        {fillCountryTable()}
                    </TableBody>
                );
            }
            else {
                return (
                    <TableBody>
                        <tr>
                            <Th>Serial No.</Th>
                            <Th>Device Name</Th>
                            <Th>Brand</Th>
                            {/* <Th>Downloads</Th>
                            <Th>Percentage</Th> */}
                        </tr>
                        {fillDeviceTable()}
                    </TableBody>
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