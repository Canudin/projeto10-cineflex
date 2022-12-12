import { useState } from "react";
import styled from "styled-components";

export default function Footer(props) {
  if (Object.keys(props).length !== 0) {
    const { id, overview, posterURL, releaseDate, title } = props.movie;
    return (
      <FooterContainer>
        <FooterImgFrame>
          <FooterImg src={posterURL} />
        </FooterImgFrame>
        <FooterTextContainer>
          <FooterTitle>{title}</FooterTitle>
        </FooterTextContainer>
      </FooterContainer>
    );
  }
}
const FooterContainer = styled.div`
  width: 100vw;
  height: 117px;
  background-color: #000814;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FooterImgFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 89px;
  left: 10px;
  bottom: 14px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-left: 10px;
`;
const FooterImg = styled.img`
  width: 48px;
  height: 72px;
`;

const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.p`
  margin-left: 15px;
  margin-right: 10px;
  text-decoration: none;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
`;
