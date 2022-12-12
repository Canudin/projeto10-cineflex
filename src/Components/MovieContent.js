import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieContent(props) {
  const { id, overview, posterURL, releaseDate, title } = props.movie;
  const setChosenSessionId = props.setChosenSessionId;
  const chosenMovieSessions = props.chosenMovieSessions;
  const setChosenMovieSessions = props.setChosenMovieSessions;
  const [days, setDays] = useState([]);
  let movieIds = []


  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`
    );
    promisse.then((answer) => {
      setDays(answer.data.days);
    });
    setChosenMovieSessions(movieIds)
    return () => {};
  }, []);

  return (
    <MovieContainer>
      {days.map((day) => {
        const { id, weekday, date, showtimes } = day;
        showtimes.map((item) => {movieIds = [...movieIds, item.id];})
        console.log(movieIds)
        return (
          <SessionContainer>
            <SessionDay>
              {weekday} - {date}
            </SessionDay>
            <ButtonContainer>
              {showtimes.map((showtime) => {
                const { name, id } = showtime;
                return (
                  <Link to={`/assentos/${id}`}>
                    <SessionHour onClick={setChosenSessionId(id)}>{name}</SessionHour>
                  </Link>
                );
              })}
            </ButtonContainer>
          </SessionContainer>
        );
      })}
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  margin-top: 20px;
`;

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const SessionDay = styled.p`
  font-family: "Roboto";
  font-size: 24px;
`;

const SessionHour = styled.button`
  margin: 10px 10px;
  width: 83px;
  height: 43px;
  left: 114px;
  top: 227px;
  background: #e8833a;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 18px;
`;

const ButtonContainer = styled.div``;
