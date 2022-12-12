import Header from "./Header";
import Footer from "./Footer";
import MovieContent from "./MovieContent";

export default function MainPage(props) {
  const { movie, setChosenSessionId, setChosenMovieSessions, chosenMovieSessions } = props;
  return (
    <>
      <Header headerAction={"Selecione o horário"} />
      <MovieContent
        movie={movie}
        setChosenSessionId={setChosenSessionId}
        chosenMovieSessions={chosenMovieSessions}
        setChosenMovieSessions={setChosenMovieSessions}
      ></MovieContent>
      <Footer movie={movie} />
    </>
  );
}
