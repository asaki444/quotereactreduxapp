import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";

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

    handleSubmit(event) {
        const { email, password } = this.state;
    
        axios
          .post(
            "http://localhost:3001/sessions",
            {
              user: {
                email: email,
                password: password
              }
            },
            { withCredentials: true }
          )
          .then(response => {
            if (response.data.logged_in) {
              this.props.handleSuccessfulAuth(response.data);
            }
          })
          .catch(error => {
            console.log("login error", error);
          });
        event.preventDefault();
      }

    render() {
        const {username, password} = this.state
        return (
            <div className="Sign In Form">
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username">
                <ControlLabel>Username</ControlLabel>
                <FormControl value={username} 
                    type="username"
                    onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                    <FormControl value={password} 
                    type="password"
                    onChange={this.handleChange}/>
                </FormGroup>
                <Button
                block
                disabled={!this.validateForm()}
                onClick={this.handleSubmit}
                type="submit"
                >Submit</Button>
                </form>
            </div>
        )
    }
}
