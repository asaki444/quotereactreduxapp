
export default class SignIn extends Component {

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

    render() {
        return (
            <div className="Sign Up Form">
                <form onSubmit={this.SignUp}>
                    <input type="text" placeholder="username" />
                    <input type="email" placeholder="email" />
                    <input type="text" placeholder="firstName" />
                    <input type="text" placeholder="lastName" />
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="confirmPassword"/>
                </form>
            </div>
        )
    }
}