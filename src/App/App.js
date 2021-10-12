import { Body, Navbar, ContentDiv, Footer, LeftDiv, RightDiv } from "./styles";
import Table from "../components/Table/Table";
const App = () => {
  return (
    <Body>
      <LeftDiv>
        <h1>Navbar</h1>
        <h3>Home</h3>
        <h3>Stats</h3>
        <h3>Twitter</h3>
        <h3>Telegram</h3>
        <h3>Donation</h3>
        <h3>Downloads</h3>
      </LeftDiv>
      <RightDiv>
        <Table/>
        <Table/>
        <Table/>
      </RightDiv>
    </Body>
  );
};
export default App;
