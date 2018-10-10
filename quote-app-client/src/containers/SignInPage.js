import React, { Component } from 'react';

class SignIn extends Component {

    constructor(){
       super()
       this.state = {
           username: '',
           password: ''
         }
    }


    LogIn(event){
        event.preventDefault();
        // this.state.password and this.state.username
    }

    render() {
        return (
            <div className="Sign In Form">
                <form onSubmit={this.LogIn}>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password"/>
                </form>
            </div>
        )
    }
}