import React from 'react';

class NavBar extends React.Component {

    currentMenuButton = (userType) => {
        if (userType === 'admin') {
            return <button>Admins</button>
        } if (userType === 'big') {
            return <button>Bigs</button>
        } if (userType === 'little') {
            return <button>Littles</button>
        } else {
            return null
        }
    }

    render() {

        return (
            <div>
                <button>Home</button>
                <button>Menu</button>
                {/* {this.currentMenuButton(this.props.userType)} */}

                <button>Current User</button> 
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        )
    }


}

export default NavBar

