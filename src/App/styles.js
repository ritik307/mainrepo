import styled from "styled-components";

export const Body = styled.div`
    font-family: 'Lato', sans-serif;
    background-color: #1c1c24;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items : stretch;
    /* height: 100%; */
    background-color: black;
    color: white;
    height: 100vh;
    @media (max-width: 900px) {
        height: 100%;
    }
`;
export const Banner = styled.p`
    /* border: 1px solid #64B1F3; */
    filter: drop-shadow(0 0 0.25rem #3AC0FF);
    /* background-color: rgba(100,177,243,0.3); */
    /* border-radius: 5px; */
    padding: 1vh;
    text-align: center;
    font-size: 1.5em;
`;
export const Heading = styled.p`
    filter: drop-shadow(0 0 0.25rem #121217);
    /* padding: 1vh; */
    text-align: center;
    margin-bottom: 0%;
    font-weight: bolder;
    font-size: 1.5em;
`;
export const LeftDiv = styled.div`
    /* height: 100vh; */
    background-color: #121217;
    width: 20vh;
    /* padding: 2vh; */
    text-align: center;
    text-decoration: none;
    @media (max-width: 900px) {
        display: none;
    }
`;
export const RightDiv = styled.div`
    flex-grow: 1;
    background-color: #090C10;
    /* padding: 5vh; */
    height: 100vh;
    overflow-y: scroll;
    @media (max-width: 900px) {
        padding: 1vh;
        height: 100%;
        overflow-y: unset;
    }
`;
export const GraphDiv = styled.div`
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
    padding-bottom: 5vh;
    max-width: 100%;
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
    /* justify-content: space-between; */
`;

export const LeftGraph = styled.div`
    flex-grow: 1;
    border: 1px solid #18191a;
    filter: drop-shadow(0 0 0.25rem #494a4b);
    /* border: 1px solid #3AC0FF; */
    background-color: #080808dd;
    border-radius: 5px;
    text-align: center;
    width: 30vh;
    margin-right: 1vh;
    margin-left: 1vh;
    height: 50vh;
    @media (max-width: 900px) {
       display: none;
    }
`;

export const RightGraph = styled.div`
    flex-grow: 1;
    border: 1px solid #0D0E0F;
    filter: drop-shadow(0 0 0.25rem #494a4b);
    border-radius: 5px;
    text-align:center;
    width: 70vh;
    margin-left: 1vh;
    margin-right: 1vh;
    height: 50vh;
    @media (max-width: 900px) {
        width:100vw;
        margin-left: 0;
        margin-right: 0;
        margin-top: 1vh;
    }
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
export const FooterContainer = styled.div`
    @media (min-width: 900px) {
        display: none;
    }
`;
export const AdvBanner = styled.div`
    text-align: center;
`;
export const LoaderDiv = styled.div`
    text-align: center;
    margin: 50% 50%;
    color: whitesmoke;
`;
export const Loader = styled.div`
    /* text-align: center; */
    border: 1px solid #201f1f;
    border-radius: 50%;
    border-top: 1px solid #ebf1f5;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
`;