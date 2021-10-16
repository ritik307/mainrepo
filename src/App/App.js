import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

import { Body, Container, LeftDiv, RightDiv, Banner, FooterContainer, AdvBanner, Heading, GraphDiv, RightGraph, LeftGraph } from "./styles";

import Table from "../components/Table/Table";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import AdComponent from "../components/Adsense/AdComponent";
import PieChart from "../components/PieChart/PieChart";

const App = () => {
  const [countryData, fillCountry] = useState([]);
  const [total, setTotal] = useState(0);
  const [osData, fillOS] = useState([]);
  const [deviceData, fillDevice] = useState([]);
  // const [downloads,fillDownloads] = useState(new Array(50));

  const countryUrl = "https://sourceforge.net/projects/projectsakura/files/stats/json?start_date=2020-01-01&end_date=2025-01-01";
  const deviceUrl = "https://raw.githubusercontent.com/ProjectSakura/OTA/11/devices.json";

  const data = [
    ["Country", "Downloads"],
    ["Germany", 6686],
    ["United States", 18063],
    ["Brazil", 13775],
    ["China", 3517],
    ["France", 2522],
    ["India", 39188],
    ["Indonesia", 24299],
    ["Brazil", 13775],
    ["Russia", 13170],
    ["VietNam", 5549],
    ["Bangladesh", 4251],
    ["Nepal", 2008],
    ["Philippines", 3947],
    ["United Kingdom", 3158],
    ["Ukrain", 3130],
    ["Mexico", 2870],
    ["Turkey", 2827],
    ["Italy", 2814],
    ["Singapore", 2664],
    ["Spain", 2280],
    ["Thailand", 2033]
  ];

  const option = {
    colorAxis: { colors: ['#3AC0FF', '#2f6e8d', '#102f3f'] },
    backgroundColor: "#0d0e0f",
    // datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
  }

  useEffect(() => {
    axios.get(countryUrl)
      .then((res) => {
        setTotal(res.data.total);
        fillCountry(res.data.countries);
        fillOS(res.data.oses);
      })

      .catch((err) => {
        console.log("Error occured in countries: ");
        console.log(err);
      })
    axios.get(deviceUrl)
      .then((res) => {
        fillDevice(res.data);
      })
      .catch((err) => {
        console.log("Error occured in device: ");
        console.log(err);
      })
  }, []);

  // useEffect(()=>{
  //   console.log(countryData);
  // },[countryData]);

  // useEffect(() => {
  //   console.log("total: ", total);
  // }, [total]);

  return (
    <Body>
      <Container>
        <LeftDiv>
          <Sidebar />
        </LeftDiv>
        <RightDiv>
          <Banner>Project Sakura got downloaded <strong>{total}</strong> times.</Banner>
          <AdvBanner>
            <AdComponent />
          </AdvBanner>
          <GraphDiv>
            <LeftGraph>
              <PieChart text="OS Stats" />
            </LeftGraph>
            <RightGraph>
              <Chart
                chartEvents={[
                  {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                      const chart = chartWrapper.getChart();
                      const selection = chart.getSelection();
                      if (selection.length === 0) return;
                      const region = data[selection[0].row + 1];
                      console.log("Selected : " + region);
                    }
                  }
                ]}
                chartType="GeoChart"
                width="100%"
                height="100%"
                options={option}
                data={data}
              />
            </RightGraph>
          </GraphDiv>
          <Heading> Supported Device </Heading>
          <Table data={deviceData} type="device" total={total} />
          <Heading> Top Countries </Heading>
          <Table data={countryData} type="country" total={total} />
          <Heading> OS used to download Sakura </Heading>
          <Table data={osData} type="os" total={total} />
          <AdvBanner>
            <AdComponent />
          </AdvBanner>
        </RightDiv>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Body>
  );
};
export default App;
