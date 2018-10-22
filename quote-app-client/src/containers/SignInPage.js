import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class SignIn extends Component {

    constructor(){
       super()
       this.state = {
           username: '',
           password: '',
         }
    }
  
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
 
    LogIn(event){
        event.preventDefault();
        // this.state.password and this.state.username
    }
    
    validateForm(){
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <div className="Sign In Form">
                <form onSubmit={this.LogIn}>
                <FormGroup controlId="username">
                <ControlLabel>Username</ControlLabel>
                <FormControl value={this.state.username} 
                    type="username"
                    onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                    <FormControl value={this.state.password} 
                    type="password"
                    onChange={this.handleChange}/>
                </FormGroup>
                <Button
                block
                disabled={!this.validateForm()}
                type="submit"
                >Submit</Button>
                </form>
            </div>
        )
    }
}
