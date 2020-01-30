import React from 'react';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit")
    }

    render(){
        return (
            <div className="login">
                <form className="auth-form" onSubmit={this.handleSubmit}>
                <input 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    placeholder="Username" 
                />
                <input 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    placeholder="Password" 
                    type="password"
                />
                <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login