import styled from "styled-components";

export default function SeatContainer(props) {
  const { id, name, isAvailable } = props.seat;
  console.log(name, isAvailable)
  if (isAvailable) {
    return (
      <SeatContent bgcolor={isAvailable} borderColor={isAvailable}>
        <p>{name}</p>
      </SeatContent>
    );
  } else {
    return (
      <SeatContent bgcolor={isAvailable} borderColor={isAvailable}>
        <p>{name}</p>
      </SeatContent>
    );
  }
}

const SeatContent = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${props => props.bgcolor?"#c3cfd9":"#FBE192"};
  border: ${props => props.borderColor?"1px solid #808f9d":"1px solid #F7C52B"};
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

// background: #FBE192;
// border: ;
