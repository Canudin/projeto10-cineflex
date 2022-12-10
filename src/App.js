import styled from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promisse = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
    promisse.then((answer) => setMovies(answer.data))
    return () => {};
  }, []);

  return (
    <Container>
      <Header />
      <Content movies={movies}/>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
`;
