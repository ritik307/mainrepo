import styled from "styled-components";

export const Body = styled.div`
    max-width: 100%;
    background-color: #090C10;
    color: whitesmoke;
    font-size: larger;
    padding: 3vh;
    @media (max-width: 768px) {
        padding: 1vh;
    }
    /* padding: 0; */
    /* border: 1px solid #3AC0FF; */
    /* border-radius: 50px; */
`;

export const TableContainer = styled.table`
    /* border-collapse: collapse; */
    border-collapse: separate;
    border-spacing: 0 10px;
    /* border: 2px solid #64B1F3; */
    /* border-radius: 5px !important; */
    width: 100%;
`;
export const Th = styled.th`
    /* font-size: x-large; */
    text-align: left;
    padding: 1.5vh;
    /* border-radius: 5px !important; */
    background-color: #64B1F3;
`;
export const Td = styled.td`
    /* border: 1px solid gray; */
    padding: 2vh;
    background-color: #1C1C24;
`;