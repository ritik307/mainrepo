import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items : stretch;
    height: 100vh;
    background-color: black;
    color: white;
`;
export const LeftDiv = styled.div`
    /* height: 100vh; */
    background-color: #121217;
    width: 20vh;
    padding: 2vh;
    text-align: center;
`;
export const RightDiv = styled.div`
    /* height: 100vh; */
    flex-grow: 1;
    background-color: #090C10;
    /* padding: 5vh; */
`;

export const Navbar = styled.nav`
    height: fit-content;
    position: fixed;
    width: 100%;
    color: white;
    background-color: #121217;
`;
export const ContentDiv = styled.div`
    margin : 10vh 2vh;
    /* height: 100vh; */
`
export const Footer = styled.footer`
    height: fit-content;
    color: white;
    background-color: #121217;
`;