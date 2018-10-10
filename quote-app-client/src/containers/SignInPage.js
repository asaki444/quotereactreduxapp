import React, { Component } from 'react';

class SignIn extends Component {
    constructor(){
        super()
       this.state = {
           username: '',
           password: ''
         }
       }


    let LogIn = (e)=>{
        
    }
    render() {
        return (
            <div className="Sign In Form">
                <form onSubmit={this.LogIn}>
                <input />
                </form>
            </div>
        )
    }
}