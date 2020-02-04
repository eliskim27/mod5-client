import React from 'react';
import LittleProfile from './LittleProfile';
import LittleAllBigs from './LittleAllBigs';
import LittleAllAppointments from './LittleAllAppointments';

class LittlesContainer extends React.Component {

    littlesContShow = (menuSelect) => {
        switch (menuSelect){
            case "profile":
                return (<LittleProfile/>);
            case "all bigs":
                return (<LittleAllBigs/>);
            case "all appts":
                return (<LittleAllAppointments/>);
            default:
                return null
    
        }
    }

    render() {
        return (
            <div>
                {this.littlesContShow(this.props.menuSelect)}
            </div>
        )
    }


}

export default LittlesContainer