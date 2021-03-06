import React from 'react';

class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        userType: 'none'
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        
        if (this.state.password === this.state.passwordConfirmation) {
            fetch(`http://localhost:3000/api/v1/${this.state.userType}s`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    user_type: this.state.userType
                })
            })
            .then(resp => resp.json())
            .then(newUserObj => {
                if (newUserObj.errors) {
                    alert(newUserObj.errors)
                } else {
                    // send to state
                    this.props.setUser(newUserObj)
                    // reroute
                }
            })
        } else {
            alert("passwords dont match!!!!!")
        }
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
                /> <br/>
                <input 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    placeholder="Password" 
                    type="password"
                /> <br/>
                <input 
                    name="passwordConfirmation" 
                    value={this.state.passwordConfirmation} 
                    onChange={this.handleChange} 
                    placeholder="Confirm Password" 
                    type="password"
                /> <br/>
                <select onChange={(e) => {
                    this.setState({userType: e.target.value})
                }}>
                    <option value="admin">admin</option>
                    <option value="big">big</option>
                    <option value="little">little</option>
                    <option selected value="none">none (remove later, for testing)</option>
                </select> <br/>
                <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp