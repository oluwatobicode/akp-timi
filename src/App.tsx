import AkpVideo from "./components/AkpVideo";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import PlayMe from "./components/PlayMe";
import SwipeCards from "./components/SwipeCards";
import TypeWriter from "./components/TypeWriter";

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-5 text-center ml-5 mr-5">
      <Intro />
      <PlayMe />
      <TypeWriter />
      <SwipeCards />
      <AkpVideo />
      <Footer />
    </main>
  );
};

export default App;
