import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'
import GamesNames from './components/GamesNames/GamesNames';
import Fooder from './components/Fooder/Fooder'
import { Route, useLocation, } from 'react-router-dom';

function App() {
  const location = useLocation()


  return (
    <div className="App">

      {
        location.pathname !== "/" ? <Nav/> : null //para que la navbar no se muestre en la pagina principal donde esta el form, osea la ruta "/"
      }

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/detail/:id">
        <Detail />
      </Route>

      <Route exact path="/name">
        <GamesNames />
      </Route>

      <Route exact path="/form">
        <Form />
      </Route>

      {
        location.pathname !== "/" && <Fooder/> 
      }

    </div>
  );
}

export default App;
