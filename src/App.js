import './css/App.css';
import './css/Media.css'
import { Container } from 'react-bootstrap';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import FadeIn from './components/fadeincomp';
function App() {

  return (
    <Container>
      <FadeIn class = "navbar-row">
        <NavBar />
      </FadeIn>
      <FadeIn class = "hero-row" id = "home">
        <Hero />
      </FadeIn>
      <FadeIn class = "projects-row" id = "projects">
        <Projects />
      </FadeIn>
      <FadeIn class = "about-row" id = "about">
        <About />
      </FadeIn>
      <FadeIn class = "contact-row" id = "contact">
        <Contact />
      </FadeIn>
    </Container>
  );
}

export default App;
