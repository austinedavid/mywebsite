import styled from 'styled-components'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimony from './components/Testimony';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// below is our styling
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Testimony/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
}

export default App;
