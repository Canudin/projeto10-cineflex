import styled from "styled-components";
import Header from "./Header";

export default function SuccessPage(props) {
  const { setHeaderAction, headerAction, movie, seats, nome, cpf, chosenMovie } = props;
  setHeaderAction("Pedido feito com sucesso!");
  console.log(movie)
  return (
    <>
      <Header headerAction={headerAction}/>
         <Movie>
          <p>Filme e sessão</p>
          <p>{chosenMovie.title}</p>
         </Movie>
    </>
  );
}


const Movie = styled.div``