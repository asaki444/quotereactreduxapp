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

 handleChange(){
    this.setState({
        [event.target.name]: event.target.value
    })
 }

    validateForm(){
         for( let property in this.state ){
              if(this.state[property].length === 0 ){
                  return false;
              }
         }
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.signup(this.state)) {
          this.props.history.push('/user_profile')
          window.alert("Thank you for signing up.")
        } else {
          window.alert("We're having issues creating your account.")
        }
      }
    render() {
        return (
            <div className="Sign Up Form">
                <form onSubmit={this.SignUp}>
                <FormGroup controlId="username">
                <Label for="username">UserName</Label>
                    <input type="text" placeholder="username" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="email">
                <ControlLabel>Email</ControlLabel>
                    <input type="email" placeholder="email"  onChange={this.handleChange} />
                    </FormGroup>
                <FormGroup controlId="firstName">
                <ControlLabel>First Name</ControlLabel>
                    <input type="text" placeholder="firstName"  onChange={this.handleChange} />
                    </FormGroup>
                <FormGroup controlId="lastName">
                <ControlLabel>Last Name</ControlLabel>
                    <input type="text" placeholder="lastName" onChange={this.handleChange} />
                    </FormGroup>
                <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                    <input type="password" placeholder="password" onChange={this.handleChange}/>
                    </FormGroup>
                <FormGroup controlId="confirmPassword">
                <ControlLabel> Confirm Password</ControlLabel>
                    <input type="password" placeholder="confirmPassword" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button
                block
                disabled={this.validateForm()}
                onClick={this.handleSubmit}
                type="submit"
                >Submit</Button>
                </form>
            </div>
        )
    }
}