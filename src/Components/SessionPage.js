import Header from "./Header";
import Footer from "./Footer";
import SessionContent from "./SessionContent";

export default function SessionPage(props) {
  const { movies, chosenSession, setHeaderAction, headerAction } = props;
  setHeaderAction("Selecione o(s) assento(s)");
  return (
    <>
      <Header headerAction={headerAction} />
      <SessionContent chosenSession={chosenSession}></SessionContent>
      <Footer movie={movies} />
    </>
  );
}
