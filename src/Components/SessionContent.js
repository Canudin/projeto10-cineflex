import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SessionContent(props) {
  const chosenSession = props.chosenSession;
  const [sessionSeats, setSessionSeats] = useState({
    id: "",
    name: "",
    day: "",
    movie: "",
    seats: [],
  });
  const { id, name, day, movie, seats } = sessionSeats;

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${chosenSession}/seats`
    );
    promisse.then((answer) => setSessionSeats(answer.data));
    return () => {};
  }, []);

  console.log(id, name, day, movie, seats);
  return (
    <SessionContainer>
      {seats.map((seat) => {
        const { id, name, isAvailable } = seat;
        if (isAvailable) {
          return (
            <SeatContainer id={id} isAvailable={isAvailable}>
              <p>{name}</p>
            </SeatContainer>
          );
        } else {
          return (
            <SeatContainer id={id} isAvailable={isAvailable}>
              <p>{name}</p>
            </SeatContainer>
          );
        }
      })}
    </SessionContainer>
  );
}

const SessionContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 117px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const SeatContainer = styled.div`
  width: 26px;
  height: 26px;
  left: 24px;
  top: 158px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  margin: 10px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-family: "Roboto";
    font-size: 11px;
  }
`;

// background: #FBE192;
// border: 1px solid #F7C52B;
