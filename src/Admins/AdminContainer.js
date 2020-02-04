import React from 'react';
import PendingMatches from './PendingMatches';
import BigsIndex from './BigsIndex';
import LittlesIndex from './LittlesIndex';
import MatchesIndex from './MatchesIndex';
import AppointmentsIndex from './AppointmentsIndex';

class AdminContainer extends React.Component {

    adminsContShow = (menuSelect) => {
        switch (menuSelect){
            case "pending matches":
                return (<PendingMatches/>);
            case "bigs index":
                return (<BigsIndex/>);
            case "littles index":
                return (<LittlesIndex/>);
            case "matches index":
                return (<MatchesIndex/>);
            case "appt index":
                return (<AppointmentsIndex/>);
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                {this.adminsContShow(this.props.menuSelect)}
            </div>
        )
    }


}

export default AdminContainer
