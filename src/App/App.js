import { useEffect, useState } from "react";
import axios from "axios";

import { Body, Container, LeftDiv, RightDiv, Banner, FooterContainer, AdvBanner, Heading } from "./styles";

import Table from "../components/Table/Table";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import AdComponent from "../components/Adsense/AdComponent";

const App = () => {
  const [countryData, fillCountry] = useState([]);
  const [total, setTotal] = useState(0);
  const [osData, fillOS] = useState([]);
  const [deviceData, fillDevice] = useState([]);
  // const [downloads,fillDownloads] = useState(new Array(50));

  const countryUrl = "https://sourceforge.net/projects/projectsakura/files/stats/json?start_date=2020-01-01&end_date=2025-01-01";
  const deviceUrl = "https://raw.githubusercontent.com/ProjectSakura/OTA/11/devices.json";


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
          {/* <GraphDiv>
          <LeftGraph><h1>left graph section</h1></LeftGraph>
          <RightGraph><h1>Right graph section</h1></RightGraph>
        </GraphDiv> */}
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
