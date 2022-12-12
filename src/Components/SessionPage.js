import Header from "./Header";
import Footer from "./Footer";
import SessionContent from "./SessionContent";

export default function MainPage(props) {
  const {movie, sessionId} = props;
  return (
    <>
      <Header headerAction={"Selecione o(s) assento(s)"} />
      <SessionContent sessionId={sessionId}></SessionContent>
      <Footer movie={movie} />
    </>
  );
}
