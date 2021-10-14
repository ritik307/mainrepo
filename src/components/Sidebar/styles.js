import styled from "styled-components";

export const SideDiv = styled.div`
    margin:1vh auto;
    text-align:center;
`;
export const ImgDiv = styled.div`
`;
export const SponsorImgDiv = styled.div`
    /* position: fixed; */
    height: 30vh;
    display: flex;
    align-items: flex-end;
`;
export const ImageTag = styled.img`
    border-radius: 2em;
    margin: auto;
    width: 7vh;
    height: 7vh;
`;
export const SponsorImage = styled.img`
    /* margin: auto; */
    /* position: fixed; */
    display: block;
    max-width: 100%;
    height: auto;
    /* bottom: 0; */
`;
export const Span = styled.h6`
    margin-top:1vh;
    /* font-size: larger; */
    color: #53c497;
`;
export const LinkDiv = styled.div`
    display: grid;
    margin-top: 3vh;
`;
export const Anchor = styled.a`
    margin: 1vh auto;
    color: whitesmoke;
    /* font-size: large; */
    text-decoration: none;
    &:hover {
        color: #53c497;
        cursor: pointer;
    }
`;