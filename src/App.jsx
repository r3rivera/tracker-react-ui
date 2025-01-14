import Aside from './components/navigation/Aside';
import './App.css'
import MapTracker from './components/main/MapTracker';
import Container from './components/main/Container';


export default function App() {
  return (
    <>
    <Aside></Aside>
    <Container>
      <MapTracker></MapTracker>
    </Container>
    </>
  )
}

