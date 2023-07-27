import './App.css';
import { Footer } from './components/footer/Footer';
import Nav from './components/nav/Nav';
import { RouteHandler } from './components/router/RouteHandler';

function App() {
  return (
    <div className="App">
      <Nav/>
      <RouteHandler/>
      <Footer/>
    </div>
  );
}

export default App;
