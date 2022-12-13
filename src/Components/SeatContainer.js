import styled from "styled-components";
import { useState } from "react";

export default function SeatContainer(props) {
  const { id, name, isAvailable } = props.seat;
  const [selected, setSelected] = useState(false);
  const { selectedSeats, setSelectedSeats } = props;

  if (isAvailable) {
    if (!selected) {
      return (
        <SeatContent
          bgcolor={"#C3CFD9"}
          borderColor={"1px solid #7B8B99"}
          onClick={() => {
            setSelected(!selected);
            setSelectedSeats([...selectedSeats, { id: id, selected: !selected }]);
          }}
        >
          <p>{name}</p>
        </SeatContent>
      );
    }
    if (selected) {
      return (
        <SeatContent
          bgcolor={"#1AAE9E"}
          borderColor={"1px solid #0E7D71"}
          onClick={() => {
            setSelected(!selected);
            const newArray = selectedSeats.filter((item) => item.id !== id);
            setSelectedSeats(newArray);
          }}
        >
          <p>{name}</p>
        </SeatContent>
      );
    }
  } else {
    return (
      <SeatContent bgcolor={"#FBE192"} borderColor={"1px solid #F7C52B"}>
        <p>{name}</p>
      </SeatContent>
    );
  }
}

const SeatContent = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.borderColor};
  border-radius: 12px;
  margin: 5px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto";
    font-size: 11px;
  }
`;