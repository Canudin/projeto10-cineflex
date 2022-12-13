import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SeatContainer from "./SeatContainer";

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
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${chosenSession}/seats`
    );
    promisse.then((answer) => setSessionSeats(answer.data));
    return () => {};
  }, []);

  function submit(event) {
    event.preventDefault();
    const getSelectedSeatsID = selectedSeats.map((selectedSeat) => {return selectedSeat.id});
    const postSelectedSeats = {ids: getSelectedSeatsID, name: nome, cpf: cpf}
    console.log(postSelectedSeats);
    // axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", )
  }

  // console.log(id, name, day, movie, seats);
  return (
    <SessionContainer>
      <SeatsContainer>
        {seats.map((seat) => {
          return (
            <SeatContainer
              seat={seat}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          );
        })}
      </SeatsContainer>
      <LegendsContainer>
        <LegendContainer>
          <Legend bgcolor={"#1AAE9E"} borderColor={"1px solid #0E7D71"} />
          <p>Selecionado</p>
        </LegendContainer>
        <LegendContainer>
          <Legend bgcolor={"#c3cfd9"} borderColor={"1px solid #808f9d"} />
          <p>Disponível</p>
        </LegendContainer>
        <LegendContainer>
          <Legend bgcolor={"#FBE192"} borderColor={"1px solid #F7C52B"} />
          <p>Indisponível</p>
        </LegendContainer>
      </LegendsContainer>
      <InputContainer onSubmit={submit}>
        <p>Nome do comprador:</p>
        <input
          value={nome}
          type="text"
          placeholder="Digite seu nome..."
          onChange={(content) => setNome(content.target.value)}
        ></input>
        <p>CPF do Comprador:</p>
        <input
          value={cpf}
          type="number"
          placeholder="Digite seu CPF..."
          onChange={(content) => setCpf(content.target.value)}
        ></input>
        <CheckOut type="submit">Reservar assento(s)</CheckOut>
      </InputContainer>
    </SessionContainer>
  );
}

const SessionContainer = styled.div`
  margin: 0 auto 117px auto;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
`;

const SeatsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const LegendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Legend = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.borderColor};
  border-radius: 12px;
  margin: 10px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 11px;
  }
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  font-size: 18px;
  p {
    margin-top: 20px;
  }
  input {
    margin-top: 5px;
    height: 30px;
    width: 320px;
  }
`;

const CheckOut = styled.button`
  font-family: "Roboto";
  font-size: 18px;
  color: #ffffff;
  margin-top: 30px;
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  border-radius: 3px;
  border-style: none;
`;
