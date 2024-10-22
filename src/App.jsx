import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Carousel />
      <Courses />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
