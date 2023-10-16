import "./App.scss";
import Footer from "./Layout/Footer/Footer";
import Main from "./Layout/Main/Main";
import BGDesktop from "./images/bg-desktop.png";
import BGMobile from "./images/bg-mobile.png";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const media = useMediaQuery("only screen and (max-width:700px)");
  return (
    <>
      <img
        src={media ? BGMobile : BGDesktop}
        alt="background pattern"
        className="bg"
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
