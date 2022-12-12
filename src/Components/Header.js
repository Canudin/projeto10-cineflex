import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Link to={`/`}>
          <Title>CINEFLEX</Title>
        </Link>
      </TitleContainer>
      <HeaderAction>
        <p>{props.headerAction}</p>
      </HeaderAction>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 177px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
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

const HeaderAction = styled.div`
  margin-top: 67px;
  width: 100vw;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  /* border-bottom: 1px solid #293241; */
  box-shadow: 0px 10px 10px 0px rgba(41, 50, 65, 1);
  font-family: "Roboto", normal;
  font-size: 24px;
  background: linear-gradient(
    180deg,
    rgba(0, 8, 20, 1) 0%,
    rgba(10, 21, 38, 1) 60%,
    rgba(41, 50, 65, 1) 100%
  );
  color: #c1121f;
`;

const Title = styled.p`
  text-decoration: none;
  font-size: 34px;
  font-family: "Roboto", sans-serif;
  color: #c1121f;
`;
