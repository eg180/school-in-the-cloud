import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import About from './components/About';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './App.css';
import styled from 'styled-components';

const StyledHeader =styled.header`
  background-color: #ffffff;

`;

function App() {
  return (
    <div>
      <StyledHeader>
        <Nav />
      </StyledHeader>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
