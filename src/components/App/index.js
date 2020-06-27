import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../../App.css';
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
import SignUp from '../SignUp'
import ErrorPage from '../ErrorPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/welcome" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route component={ErrorPage}/>
          </Switch>
        <Footer/>

        </div>
    </Router>
  );
}

export default App;
