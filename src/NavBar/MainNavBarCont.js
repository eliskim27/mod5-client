import React from 'react';
import BigsMenu from './BigsMenu';
import LittlesMenu from './LittlesMenu';
import AdminsMenu from './AdminsMenu';


class MainNavBarCont extends React.Component {

    navBarRender = (userType) => {
        switch (userType) {
            default:
                return null;
            case 'big':
                return (<BigsMenu
                    menuSelect={this.props.menuSelect}
                />);
            case 'little':
                return (<LittlesMenu
                    menuSelect={this.props.menuSelect}
                />);
            case 'admin':
                return (<AdminsMenu
                    menuSelect={this.props.menuSelect}
                />);
        }
    }

    render() {
        return(
            this.navBarRender(this.props.userType)
        )
    }
}

export default MainNavBarCont