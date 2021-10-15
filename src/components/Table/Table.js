import { useEffect, useState } from "react";
import axios from "axios";
import { Body, TableContainer, Td, Th } from "./styles";
import flag from "../../data/countryCode";
const Table = (props) => {

    const [isLoading] = useState(false);
    // const [data,setData] = useState(props.data);
    const [downloads, setDownloads] = useState([]);
    useEffect(() => {
        // console.log("useMemo",props.data)
        if (props.type === "device") {
            for (let idx = 0; idx < 50; idx++) {
                // console.log("here");
                if (props.data[idx]) {
                    const deviceCode = props.data[idx].codename;
                    const url = `https://sourceforge.net/projects/projectsakura/files/${deviceCode}/stats/json?start_date=2020-01-01&end_date=2022-01-01`;
                    // console.log(deviceCode);
                    axios.get(url)
                        .then((res) => {
                            const newData = {
                                codename: deviceCode,
                                count: res.data.total,
                            };

                            setDownloads(oldData => [...oldData, newData]);
                        })
                        .catch((err) => {
                            console.log("Error while fetching device download: ");
                            console.log(err);
                        })
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data]);



    //? FILLING DEVICE
    const fillDeviceTable = () => {
        let index = 0;
        // console.log(downloads);
        if (downloads.length) {
            const rows = props.data.map((entry) => {

                const deviceObj = downloads.find((data) => data.codename === entry.codename);
                if (deviceObj) {
                    const deviceTotal = deviceObj.count;
                    //console.log(deviceObj);
                    // console.log(deviceTotal);
                    const percent = ((deviceTotal * 100) / (props.total)).toFixed(2);

                    return (
                        <tr key={index}>
                            <Td>{++index}</Td>
                            <Td>{entry.name}</Td>
                            <Td>{deviceTotal}</Td>
                            <Td>{percent}</Td>
                        </tr>
                    )
                }
                return null;
            })
            return rows;
        }
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
        let index = 0;
        const rows = props.data.slice(0, 20).map((entry) => {
            const flagSrc = `https://www.countryflags.io/${flag[index++].code}/flat/48.png`;
            return (
                <tr key={index}>
                    <Td>{index}</Td>
                    <Td><img key={index} alt={entry[0]} src={flagSrc}></img></Td>
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
                        <tbody>
                            <tr>
                                <Th>Serial No.</Th>
                                <Th>Flag</Th>
                                <Th>Country Name</Th>
                                <Th>Downloads</Th>
                            </tr>
                            {fillCountryTable()}
                        </tbody>
                    </TableContainer>
                );
            }
            else if (props.type === "device") {
                return (
                    <TableContainer>
                        <tbody>
                            <tr>
                                <Th>Serial No.</Th>
                                <Th>Device Name</Th>
                                <Th>Downloads</Th>
                                <Th>Percentage</Th>
                                {/* <Th>Downloads</Th>
                            <Th>Percentage</Th> */}
                            </tr>

                            {fillDeviceTable()}
                        </tbody>

                    </TableContainer>
                )
            }
            else {
                return (
                    <TableContainer>
                        <tbody>
                            <tr>
                                <Th>Serial No.</Th>
                                <Th>Device Name</Th>
                                <Th>Downloads</Th>
                                {/* <Th>Downloads</Th>
                            <Th>Percentage</Th> */}
                            </tr>

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