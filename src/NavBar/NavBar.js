import React from 'react';
import MainNavBarCont from './MainNavBarCont';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    userControls = (userType) => {
        if (userType === 'none') {
            return (
                <span>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </span>
            )
        } else {
            return (
                <span>
                    <button>Current Username (Name)</button>
                </span>
            )
        }
    }



    render() {

        return (
            <div>
                <Link to="/"><button>Home</button></Link>
                <MainNavBarCont
                    userType={this.props.userType}
                    menuSelect={this.props.menuSelect}
                />
                {this.userControls(this.props.userType)}
            </div>
        )
    }


}

export default NavBar

