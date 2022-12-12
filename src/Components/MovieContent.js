import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieContent(props) {
  const { id, overview, posterURL, releaseDate, title } = props.movie;
  const [days, setDays] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`
    );
    promisse.then((answer) => {
      setDays(answer.data.days);
      console.log(days);
    });
    return () => {};
  }, []);

  return (
    <MovieContainer>
      {days.map((day) => {
        const { id, weekday, date, showtimes } = day;
        return (
          <SessionContainer>
            <SessionDay>
              {weekday} - {date}
            </SessionDay>
            {showtimes.map((showtime) => {
              const {name, id} = showtime;
              return <SessionHour>{name}</SessionHour>;
            })}
          </SessionContainer>
        );
      })}
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  margin-top: 20px;
`;

const SessionContainer = styled.div``;

const SessionDay = styled.p``;

const SessionHour = styled.button``;
