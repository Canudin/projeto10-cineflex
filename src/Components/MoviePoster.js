import styled from "styled-components";

export default function MoviePoster() {
  const hello = (name) => {}
  const hello2 = name => {}
  return (
    <PostersContainer>
      <PosterFrame>
        <PosterImage />
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
`;

const PosterImage = styled.img``;
