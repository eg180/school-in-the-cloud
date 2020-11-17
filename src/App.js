import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import './App.css';
import styled from 'styled-components';

const StyledHeader =styled.header`

`;

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
