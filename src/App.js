import React from 'react';
import './App.css';
import * as Fetches from './Fetches'
import { Route, Switch } from 'react-router-dom';

// CHILDREN
  import MainContainer            from './files/MainContainer';
  import GeneralContainer         from './files/GeneralContainer'
  import NavBar                   from './NavBar/NavBar';
  // import footer
  // import donate button
  import Login                    from './files/Login';
  import SignUp                   from './files/SignUp';

class App extends React.Component {
  state = {
    allBigs: [],
    allLittles: [],
    currentUser: null,
    userType: 'none',           //'none', 'big', 'little', 'admin'
    menuSelect: "profile"       //'none', 'profile', 'timesheet', 'all littles', 'all appts', 'all bigs', 'pending matches', 'bigs index', 'littles index', 'matches index', 'appt index'
  } 


  setUser = (user) => {
    this.setState({currentUser: user})
  }

  menuSelect = (e) => {
    this.setState({menuSelect: e.target.value})
  }

  router = (type, payload) => {
    switch(type){
      case 'SET_USER':
        this.setState({currentUser: payload})
      default:
        break;
    }
  }


  componentDidMount() {
    Fetches
    .fetchBigs()
    .then(allBigs => {
      this.setState({allBigs: allBigs})
    })
    Fetches
    .fetchLittles()
    .then(allLittles => {
      this.setState({allLittles: allLittles})
    })
  }


  render() {
    return (
      <div className="App">
{/* REMOVE BELOW!!! FOR TESTING ONLY */}
        <div>
          <span>who is logged in:</span>
          <select 
            onChange={(e) => {this.setState({userType: e.target.value})}}
            value={this.state.userType}
          >
            <option value="admin"   >admin</option>
            <option value="big"     >big</option>
            <option value="little"  >little</option>
            <option value="none"    >none (logged in user)</option>
          </select>
        </div>
{/* REMOVE ABOVE!!! FOR TESTING ONLY */}                                       
        

        <NavBar 
          userType={this.state.userType}
          menuSelect={this.menuSelect}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <GeneralContainer
          />}/>
          <Route exact path="/user" render={(routerProps) => 
            <MainContainer 
              {...routerProps}
              userType={this.state.userType} 
              menuSelect={this.state.menuSelect}
              allBigs={this.state.allBigs} 
              allLittles={this.state.allLittles}
          />}/>
          <Route exact path="/login" render={(routerProps) => 
            <Login
              {...routerProps}
          />}/>
          <Route exact path="/signup" render={(routerProps) =>
            <SignUp 
              {...routerProps}
              setUser={this.setUser}
          />}/>
        </Switch>
      </div>
    );
  }
}
export default App;


