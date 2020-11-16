import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
