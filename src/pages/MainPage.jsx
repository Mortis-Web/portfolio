import Header from "../components/Header/Header";
import About from "../components/About/About";
import Nav from "../components/Nav/Nav";
import Skills from "../components/Skills/Skills";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
const MainPage = () => {
  return (
    <main>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default MainPage;
