import styled from "styled-components";
import MoviePoster from "./MoviePoster";

export default function Content(props) {
  const { movies } = props;
  console.log(movies)
  return (
    <ContentContainer>
      {movies.map((movie) => {
        return <MoviePoster title={movie.title} id={movie.id} posterURL={movie.posterURL} />;
      })}
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  min-height: calc(100vh - 67px - 110px);
  margin-bottom: 117px;
  background-color: #293241;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: space-evenly;
`;
