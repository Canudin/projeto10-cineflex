import { useState, useEffect } from "react";
import axios from "axios";

export default function SessionContent(props) {
  const sessionId = props;
  const [seats, setSeats] = useState();
  useEffect(() => {
    const promisse = axios.post(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`
    );
    promisse.then((answer) => setSeats(answer.data));
    return () => {};
  }, []);
  console.log(seats);
  return;
}
