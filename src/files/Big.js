import React from 'react';

class Big extends React.Component {

    render() {
        return(
            <div>
                {/* <img> </img> */}
                <h1>{this.props.big.applicationquestion1} {this.props.big.applicationquestion2}</h1>
                <div>Areas of Experience: {this.props.big.fieldsofexperince}</div>
                <div>Username: {this.props.big.username}</div>
                <div>Password: {this.props.big.password}</div>

            </div>
        )
    }
}

export default Big