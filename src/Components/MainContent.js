import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import {Link} from "react-router-dom"

export default function MainContent(props) {
  const { movies } = props;
  return (
    <ContentContainer>
      {movies.map((movie) => {
        return (
          <Link to={`/sessoes/${movie.id}`}>
            <MoviePoster title={movie.title} id={movie.id} posterURL={movie.posterURL} />
          </Link>
        );
      })}
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  min-height: calc(100vh - 67px - 110px);
  background-color: #293241;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: space-evenly;
`;
