import React, {Component}from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import SignIn from '../containers/SigninPage';
import SignUp from '../containers/SignupPage.Js';

export default class LogIn extends Component {
 constructor(props) {
        super(props);
        this.state = {display: true};
      }
   
  displayChange(){
      if(this.state.display){
          this.setState({display: false})
      }
      else{
        this.setState({display: true})
      }
    }
  render(){
        return(
            <div className="LogInHeader">
            <h1>Log in Or Sign Up to Begin</h1>
            <button onClick={this.displayChange.bind(this)}>Sign In </button>
            <button onClick={this.displayChange.bind(this)}> Sign Up </button>
            <div class="form">
            {this.state.display ? <SignIn/> : <SignUp/> }
            </div>
            </div>
        )
    }
}