import styled from "styled-components";
import MoviePoster from "./MoviePoster";

export default function Content(props) {
  return (
    <ContentContainer>
      <div className="HeaderText">Selecione o filme</div>
      <MoviePoster />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  margin-top: 67px;
  height: auto;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  .HeaderText {
    height: 110px;
    background-color: white;
    color: black;
  }
`;
