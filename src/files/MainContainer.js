import React from 'react';
import AdminContainer from './AdminContainer';
import BigsContainer from './BigsContainer';
import LittlesContainer from './LittlesContainer';

class MainContainer extends React.Component {

    currentContainer = (userType) => {
        if (userType === 'admin') {
            return(
                <AdminContainer
                    // allBigs={this.props.allBigs}
                    // allLittles={this.props.allLittles}
                />)
        } if (userType === 'big') {
            return(
                <BigsContainer
                    allBigs={this.props.allBigs}
                />)
        } if (userType === 'little') {
            return(
                <LittlesContainer
                    allLittles={this.props.allLittles}
                />)
        } else {
            return null
        }
    }

    render() {
        return(
            this.currentContainer(this.props.userType)
        )
    }


}

export default MainContainer