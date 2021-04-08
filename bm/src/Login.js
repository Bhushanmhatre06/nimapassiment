import React, { Component } from 'react';
import Navbar from './Navbar';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            password: '',
            loggedIn: false
        }
    }


    handleChange = (evt) => {                
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });
    }

    handleSubmit = () => {
        const {username,  password} = this.state;
        const {update} = this.props;
        update();
        if(username  && password) {
            this.props.history.push("/homepage");
        }
        else {
            alert('First Login');
        }
    }


    render() { 
        return (
                <div className="main">
                    <form className="col-3">
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                name="username" 
                                type="text" 
                                className="form-control" 
                                value={this.state.username} 
                                onChange={this.handleChange}
                            />
                        </div>
                      
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                name="password" 
                                type="password" 
                                className="form-control" 
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={this.handleSubmit}>
                               Login
                        </button>
                        <space/> <space/> <space/> <space/>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={this.handleSubmit}>
                               changepassowrd
                        </button>
                    </form> 
                </div>
        )
    }
}
 
export default Login;