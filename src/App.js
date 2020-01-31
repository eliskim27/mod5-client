import React from 'react';
import './App.css';
import * as fetches from './fetches'
import MainContainer from './files/MainContainer';
import NavBar from './files/NavBar';
import Login from './files/Login';
import SignUp from './files/SignUp';
import GeneralContainer from './files/GeneralContainer';

class App extends React.Component {
  state = {
    allBigs: [],
    allLittles: [],
    userType: 'big',       //'none', 'big', 'little', 'admin'
    currentUser: null,
    mainShow: "main"     //'general', 'main', 'signup', 'login'
  } 

  mainShow = () => {
    console.log("main show")
  }

  // setUser = (user) => {
  //   this.setState({
  //     currentUser: user
  //   }, () => {
  //     this.props.history.push('/bigs')})
  // }

  // router = (type) => {
  //   switch(type){
  //     case ''
  //   }
  // }

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

  homepageRender = (mainShow) => {
    switch (mainShow) {
      case "main":
        return (
          <MainContainer
          userType={this.state.userType}
          allBigs={this.state.allBigs}
          allLittles={this.state.allLittles}
          />);
      case "login":
        return (<Login/>);
      case "signup":
        return (<SignUp/>);
      case "general":
        return (<GeneralContainer/>);
      default:
        return null
    }
  }

  render() {
    return (
      <div className="App">
{/* REMOVE BELOW!!! FOR TESTING ONLY */}
        <div>
          <span>for testing</span><span></span>
          <select onChange={(e) => {                        
              this.setState({userType: e.target.value})
            }}>
            <option value="admins">admin</option>
            <option value="bigs">big</option>
            <option value="littles">little</option>
            <option selected value="none">none (logged in user)</option>
          </select> <span></span>
          <select onChange={(e) => {                        
              this.setState({mainShow: e.target.value})
            }}>
            <option value="signup">signup</option>
            <option value="login">login</option>
            <option value="main">main</option>
            <option selected value="general">general (mainShow)</option>
          </select>  
        </div>
{/* REMOVE ABOVE!!! FOR TESTING ONLY */}                                       
        

        <NavBar 
          userType={this.state.userType}
          mainShow={this.mainShow}
        />
        {/* MAIN CONTAINER RENDER */}
        {this.homepageRender(this.state.mainShow)}


      </div>
    );
  }
}
export default App;


