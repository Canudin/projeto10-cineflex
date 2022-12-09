import styled from 'styled-components';

export default function Footer(props) {
  return (
    <FooterContainer>
      <FooterImg/>
      <FooterTitle>a</FooterTitle>
    </FooterContainer>
  );
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
  justify-content: center;
`;

const FooterImg = styled.img`
`

const FooterTitle = styled.p`
  text-decoration: none;
  font-size: 26px;
  font-family: "Roboto", sans-serif;
  color: #FFFFFF;
`;