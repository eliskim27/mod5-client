import React from 'react';
import { Link } from 'react-router-dom';

class BigsMenu extends React.Component {

    render() {
        return(
            <span>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value="profile"
                >Profile</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"timesheet"}
                >Timesheet</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"all littles"}
                >Little Sibs</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"all appts"}
                >Appointments</button></Link>
            </span>
        )
    }
}

export default BigsMenu