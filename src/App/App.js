import { useEffect, useState } from "react";
import axios from "axios";

import { Body, LeftDiv, RightDiv, Banner } from "./styles";

import Table from "../components/Table/Table";
import Sidebar from "../components/Sidebar/Sidebar";

const App = () => {
  const [countryData, fillCountry] = useState([]);
  const [total, setTotal] = useState(0);
  const [osData, fillOS] = useState([]);
  const [deviceData, fillDevice] = useState([]);

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
      <LeftDiv>
        <Sidebar />
      </LeftDiv>
      <RightDiv>
        <Banner>Project Sakura got downloaded {total} times.</Banner>
        {/* <GraphDiv>
          <LeftGraph><h1>left graph section</h1></LeftGraph>
          <RightGraph><h1>Right graph section</h1></RightGraph>
        </GraphDiv> */}
        <Table data={deviceData} type="device" total={total} />
        <Table data={countryData} type="country" total={total} />
        <Table data={osData} type="os" total={total} />
      </RightDiv>
    </Body>
  );
};
export default App;
