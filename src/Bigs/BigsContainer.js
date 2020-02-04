import React from 'react';
import BigProfile from './BigProfile';
import BigTimesheet from './BigTimesheet';
import BigAllLittles from './BigAllLittles';
import BigAllAppointments from './BigAllAppointments';

class BigsContainer extends React.Component {

    bigsContShow = (menuSelect) => {
        switch (menuSelect){
            case "profile":
                return (<BigProfile/>);
            case "timesheet":
                return (<BigTimesheet/>);
            case "all littles":
                return (<BigAllLittles/>);
            case "all appts":
                return (<BigAllAppointments/>);
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                {this.bigsContShow(this.props.menuSelect)}
            </div>
        )
    }
}

export default BigsContainer

