import { Body, Navbar, ContentDiv, Footer, LeftDiv, RightDiv,Banner, GraphDiv, RightGraph, LeftGraph } from "./styles";
import Table from "../components/Table/Table";

import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const[countryData,fillCountry] =useState([]);
  // useState[osData,fillOs] =useState([]);
  // useState[deviceData,fillDevice] =useState([]);
  
  const countryUrl="https://sourceforge.net/projects/projectsakura/files/stats/json?start_date=2020-01-01&end_date=2025-01-01";
  const deviceUrl="https://raw.githubusercontent.com/ProjectSakura/OTA/11/devices.json";
  
  
  useEffect(()=>{
    axios.get(countryUrl)
    .then((res)=>{
      fillCountry(res.data.countries);
    })
    .catch((err)=>{
      console.log("Error occured: ");
      console.log(err);
    })
  },[]);

  // useEffect(()=>{
  //   console.log(countryData);
  // },[countryData]);

  return (
    <Body>
      {/* <LeftDiv>
        <h1>Navbar</h1>
        <h3>Home</h3>
        <h3>Stats</h3>
        <h3>Twitter</h3>
        <h3>Telegram</h3>
        <h3>Donation</h3>
        <h3>Downloads</h3>
      </LeftDiv> */}
      <RightDiv>
        <Banner>Project Sakura got downloaded 203014 times.</Banner>
        {/* <GraphDiv>
          <LeftGraph><h1>left graph section</h1></LeftGraph>
          <RightGraph><h1>Right graph section</h1></RightGraph>
        </GraphDiv> */}
        <Table data={countryData}/>
        
      </RightDiv>
    </Body>
  );
};
export default App;
