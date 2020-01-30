import React from 'react';
import './App.css';
import * as fetches from './fetches'
import MainContainer from './files/MainContainer';
import NavBar from './files/NavBar';
import { Route, Switch } from 'react-router-dom';
import Login from './files/Login';

class App extends React.Component {
  state = {
    allBigs: [],
    allLittles: [],
    userType: 'big'
  }

  componentDidMount() {
    fetches
    .fetchBigs()
    .then(allBigs => {
      this.setState({allBigs: allBigs})
    })
    fetches
    .fetchLittles()
    .then(allLittles => {
      this.setState({allLittles: allLittles})
    })
  }

  render() {
    return (
      <div className="App">
        
        {/* REMOVE BELOW!!! FOR TESTING ONLY */}
        <select onChange={(e) => {
            this.setState({userType: e.target.value})
          }}>
          <option value="admin">admin</option>
          <option value="big">big</option>
          <option value="little">little</option>
          <option selected value="none">none (remove later, for testing)</option>
        </select>
        {/* REMOVE ABOVE!!! FOR TESTING ONLY */}

        <NavBar 
          userType={this.state.userType}
        />
        <Switch>
          <Route path='/login' render={() => 
              <Login 
              />}/>
          <Route path="/" render={() => 
              <MainContainer 
                  userType={this.state.userType}
                  allBigs={this.state.allBigs}
                  allLittles={this.state.allLittles}
              />}/>
        </Switch>
      </div>
    );
  }
}
export default App;
