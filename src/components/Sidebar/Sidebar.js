import { useEffect, useState } from "react";
import {
    SideDiv, ImageTag, LinkDiv, Anchor, ImgDiv, Span, SponsorImage, SponsorImgDiv,
} from "./styles";
// Logo
import Logo from "../../images/logo.webp";

const Sidebar = () => {
    const [imageSrc, setImageSrc] = useState([]);
    useEffect(() => {
        //preloading image
        const img = new Image();
        img.onload = () => {
            setImageSrc(Logo);
        };
        img.src = Logo;
    }, []);
    return (
        <SideDiv>
            <ImgDiv>
                <ImageTag src={imageSrc} alt="logo" />
                <Span> Project Sakura </Span>
            </ImgDiv>
            <LinkDiv>
                <Anchor target="_blank" href="https://projectsakura.github.io/"> Home </Anchor>
                <br />
                <Anchor target="_blank" href="https://projectsakura.xyz/blog/#/"> Blogs </Anchor>
                <br />
                <Anchor target="_blank" href="https://twitter.com/ProjectSakura_"> Twitter </Anchor>
                <br />
                <Anchor target="_blank" href="https://t.me/ProjectSakura"> Telegram </Anchor>
                <br />
                <Anchor target="_blank" href="https://projectsakura.xyz/blog/#/donation"> Donation </Anchor>
                <br />
                <Anchor target="_blank" href="https://projectsakura.xyz/download"> Downloads </Anchor>
                <br />
            </LinkDiv>
            {/* Sponser Section */}
            <SponsorImgDiv>
                {/* <h2>Sponsored By</h2> */}
                <SponsorImage src="https://projectsakura.xyz/image/spon-white.png" alt="logo" />
            </SponsorImgDiv>
        </SideDiv>
    );
}
export default Sidebar;
