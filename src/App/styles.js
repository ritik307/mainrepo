import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items : stretch;
    height: 100%;
    background-color: black;
    color: white;
    height: 100vh;
`;
export const Banner = styled.p`
    border: 1px solid #3AC0FF;
    background-color: rgba(58,192,225,0.3);
    border-radius: 5px;
    padding: 2vh;
    text-align: center;
    font-size: 1.5em;
`;
export const LeftDiv = styled.div`
    /* height: 100vh; */
    background-color: #121217;
    width: 20vh;
    padding: 2vh;
    text-align: center;
    @media (max-width: 768px) {
        display: none;
    }
`;
export const RightDiv = styled.div`
    flex-grow: 1;
    background-color: #090C10;
    padding: 5vh;
    overflow-y: scroll;
    @media (max-width: 768px) {
        padding: 1vh;
    }
`;
export const GraphDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 5vh;
    max-width: 100%;
    /* justify-content: space-between; */
`;

export const LeftGraph = styled.div`
    flex-grow: 1;
    border: 1px solid #3AC0FF;
    background-color: rgba(58,192,225,0.3);
    border-radius: 5px;
    text-align: center;
    /* width: 50vh; */
    margin-right: 1vh;
    height: 50vh;
`;

export const RightGraph = styled.div`
    flex-grow: 1;
    border: 1px solid #3AC0FF;
    background-color: rgba(58,192,225,0.3);
    border-radius: 5px;
    text-align:center;
    /* width: 50vh; */
    margin-left: 1vh;
    height: 50vh;
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