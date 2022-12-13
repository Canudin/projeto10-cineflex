import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import MainPage from "./Components/MainPage";
import MoviePage from "./Components/MoviePage";
import SessionPage from "./Components/SessionPage";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [headerAction, setHeaderAction] = useState("Selecione o filme");
  const [chosenSession, setChosenSession] = useState(null);

  useEffect(() => {
    const promisse = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
    promisse.then((answer) => setMovies(answer.data));
    return () => {};
  }, []);
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<MainPage movies={movies} headerAction={headerAction} />} />
          {movies.map((item) => {
            return (
              <Route
                path={`/sessoes/${item.id}`}
                element={<MoviePage movie={item} setChosenSession={setChosenSession} setHeaderAction={setHeaderAction} headerAction={headerAction}/>}
              />
            );
          })}
          <Route
            path={`/assentos/${chosenSession}`}
            element={<SessionPage movies={movies} chosenSession={chosenSession} setHeaderAction={setHeaderAction} headerAction={headerAction}/>}
          />
          {/* <Route path="/sucesso" element={<MainPage movies={movies} />} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 100vw;
`;
