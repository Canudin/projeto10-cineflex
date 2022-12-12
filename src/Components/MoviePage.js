import Header from "./Header";
import Footer from "./Footer";
import MovieContent from "./MovieContent";

export default function MainPage(props) {
  const movie = props.movie;
  return (
    <>
      <Header headerAction={"Selecione o horário"}/>
      <MovieContent movie={movie}></MovieContent>
      <Footer />
    </>
  );
}
