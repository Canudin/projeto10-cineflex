import styled from "styled-components";

export default function Header(props) {
  return (
    <HeaderContainer>
      <Title>CINEFLEX</Title>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  width: 100vw;
  height: 67px;
  background-color: #000814;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  text-decoration: none;
  font-size: 34px;
  font-family: "Roboto", sans-serif;
  color: #c1121f;
`;
