import Header from "./Header";
import Footer from "./Footer";
import SessionContent from "./SessionContent";

export default function SessionPage(props) {
  const {
    movies,
    chosenSession,
    setHeaderAction,
    headerAction,
    chosenMovie,
    setChosenMovie,
    chosenSeats,
    setChosenSeats,
    nome,
    setNome,
    cpf,
    setCpf,
  } = props;
  setHeaderAction("Selecione o(s) assento(s)");
  return (
    <>
      <Header headerAction={headerAction} />
      <SessionContent
        chosenMovie={chosenMovie}
        setChosenMovie={setChosenMovie}
        chosenSession={chosenSession}
        chosenSeats={chosenSeats}
        setChosenSeats={setChosenSeats}
        nome={nome}
        setNome={setNome}
        cpf={cpf}
        setCpf={setCpf}
      ></SessionContent>
      <Footer movie={movies} />
    </>
  );
}
