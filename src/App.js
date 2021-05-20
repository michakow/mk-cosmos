import './App.css';
import Logo from './components/Logo'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'
import styled from 'styled-components'
import BackgroundStuff from './components/BackgroundStuff'

const StyledContainter = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-content: space-between;
  overflow-x: hidden;
`

function App() {
  return (
    <StyledContainter>
      <BackgroundStuff />
      <Logo />
      <Wrapper />
      <Footer />
    </StyledContainter>
  );
}

export default App;
