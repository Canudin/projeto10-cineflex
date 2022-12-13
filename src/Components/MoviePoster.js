import styled from "styled-components";

export default function MoviePoster(props) {
  const {title, id, posterURL, setChosenMovie} = props
  return (
    <PostersContainer>
      <PosterFrame>
        <PosterImage src={posterURL}/>
      </PosterFrame>
    </PostersContainer>
  );
}

const PostersContainer = styled.div`
display: flex;
  flex-wrap: wrap;
`;

const PosterFrame = styled.div`
  width: 145px;
  height: 209px;
  background-color: white;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 20px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PosterImage = styled.img`
  width: 129px;
  height: 193px;
`;
