import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Carousel from "./components/Carousel";
import Test from "./components/test";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      {/* <Carousel /> */}
      <Test />
    </div>
  );
}

export default App;
