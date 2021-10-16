import { useEffect, useState } from "react";
import { Body } from "./styles";
import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {
    const [chartData, setChartData] = useState({});
    // let defaultProps = {
    //     type: '0',
    //     displayTile: true,
    //     text: "",
    //     legendPosition: 'top'
    // }
    useEffect(() => {
        const data = {
            labels: ["Android", "Windows", "Linux", "Macintosh", "Unknown", "Solaris"],
            datasets: [
                {
                    label: "OS used to download Sakura",
                    data: [80720, 79884, 22564, 2022, 19309, 1],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(255, 159, 64, 0.6)",
                        "rgba(255, 19, 89, 0.6)",
                        "rgba(255, 99, 132, 0.6)",
                    ],
                },
            ],
        }
        setChartData(data);
    }, []);

    return (
        <Body>
            <Pie
                data={chartData}
                options={{
                    title: {
                        text: props.text,
                        display: true,
                        fontSize: 20
                    },
                    legend: {
                        position: 'top',
                        display: false
                    },
                    responsiveAnimationDuration: 2000,

                }}
            />
        </Body>
    )
}
export default PieChart;