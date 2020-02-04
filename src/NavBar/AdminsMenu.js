import React from 'react';
import { Link } from 'react-router-dom';

class AdminsMenu extends React.Component {

    render() {
        return(
            <span>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value="pending matches"
                >Pending Matches</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"bigs index"}
                >All Bigs</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"littles index"}
                >All Littles</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"matches index"}
                >All Matches</button></Link>
                <Link to="/user"><button
                    onClick={this.props.menuSelect}
                    value= {"appt index"}
                >All Appointments</button></Link>
            </span>
        )
    }
}

export default AdminsMenu