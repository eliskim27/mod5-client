import React from 'react';
import { Link } from 'react-router-dom';

class LittlesMenu extends React.Component {

    render() {
        return(
            <span>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value="profile"
                >Profile</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"all bigs"}
                >Big Sibs</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"all appts"}
                >Appointments</button></Link>
            </span>
        )
    }
}

export default LittlesMenu