import styled from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";

export default function App() {
  const movie = ["a", "b"]
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
