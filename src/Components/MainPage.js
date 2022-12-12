import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function MainPage(props) {
  const movies = props.movies;
  return (
    <>
      <Header headerAction={props.headerAction}/>
      <MainContent movies={movies} />
      <Footer />
    </>
  );
}
