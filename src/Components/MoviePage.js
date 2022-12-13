import Header from "./Header";
import Footer from "./Footer";
import MovieContent from "./MovieContent";

export default function MainPage(props) {
  const { movie, setChosenSession, setHeaderAction, headerAction } = props;
  setHeaderAction("Selecione o horário");
  return (
    <>
      <Header headerAction={headerAction} />
      <MovieContent movie={movie} setChosenSession={setChosenSession}></MovieContent>
      <Footer movie={movie} />
    </>
  );
}
