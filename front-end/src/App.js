import './App.css';
import Nav from './components/nav/Nav';
import { RouteHandler } from './components/router/RouteHandler';



function App() {
  return (
    <div className="App">
       <Nav/>
      <RouteHandler/> 
    </div>
  );
}

export default App;
