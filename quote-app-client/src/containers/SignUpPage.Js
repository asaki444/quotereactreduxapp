import React, { Component } from 'react';

import { Button, FormGroup, FormControl, ControlLabel, Label } from "react-bootstrap";
export default class SignUp extends Component {

    constructor(){
       super()
       this.state = {
           username: '',
           password: '',
           email: '',
           firstName: '',
           lastName: ''
         }
    }


    SignUp(event){
        event.preventDefault();
        // this.state.password and this.state.username
    }

    validateForm(){
         for( let property in this.state ){
              if(this.state[property].length === 0 ){
                  return false;
              }
         }
    }

    render() {
        return (
            <div className="Sign Up Form">
                <form onSubmit={this.SignUp}>
                <FormGroup controlId="username">
                <Label for="username">UserName</Label>
                    <input type="text" placeholder="username" />
                </FormGroup>
                <FormGroup controlId="email">
                <ControlLabel>Email</ControlLabel>
                    <input type="email" placeholder="email" />
                    </FormGroup>
                <FormGroup controlId="firstName">
                <ControlLabel>First Name</ControlLabel>
                    <input type="text" placeholder="firstName" />
                    </FormGroup>
                <FormGroup controlId="lastName">
                <ControlLabel>Last Name</ControlLabel>
                    <input type="text" placeholder="lastName" />
                    </FormGroup>
                <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                    <input type="password" placeholder="password"/>
                    </FormGroup>
                <FormGroup controlId="confirmPassword">
                <ControlLabel> Confirm Password</ControlLabel>
                    <input type="password" placeholder="confirmPassword"/>
                    </FormGroup>
                    <Button
                block
                disabled={this.validateForm()}
                type="submit"
                >Submit</Button>
                </form>
            </div>
        )
    }
}