import React from 'react';
import BigsContainer        from '../Bigs/BigsContainer';
import LittlesContainer     from '../Littles/LittlesContainer';
import AdminContainer       from '../Admins/AdminContainer';


class MainContainer extends React.Component {

    currentContainer = (userType) => {
        switch (userType) {
            case "big":
                return (<BigsContainer
                        // allBigs={this.props.allBigs}  // might not be needed
                        menuSelect={this.props.menuSelect}
                        />);
            case "little":
                return (<LittlesContainer
                        allLittles={this.props.allLittles}
                        menuSelect={this.props.menuSelect}
                        />);
            case "admin":
                return (<AdminContainer
                        allBigs={this.props.allBigs}
                        allLittles={this.props.allLittles}
                        menuSelect={this.props.menuSelect}
                        />);
            default:
                return null
        }
    }

    render() {
        return(
            <div>
                {this.currentContainer(this.props.userType)}
            </div>
        )
    }


}

export default MainContainer




// import React from 'react';
// import { Route } from 'react-router-dom';
// import AdminContainer from './AdminContainer';
// import BigsContainer from './BigsContainer';
// import LittlesContainer from './LittlesContainer';

// class MainContainer extends React.Component {

//     currentContainer = (userType) => {
//         if (userType === 'admin') {
//             return(
//                 <Route path='/admin' render={() => 
//                     <AdminContainer
//                         // allBigs={this.props.allBigs}
//                         // allLittles={this.props.allLittles}
//                 />}/>)
//         } if (userType === 'big') {
//             return(
//                 <Route path='/bigs' render={() => 
//                     <BigsContainer
//                         allBigs={this.props.allBigs}
//                 />}/>)
//         } if (userType === 'little') {
//             return(
//                 <Route path='/littles' render={() => 
//                     <LittlesContainer
//                         allLittles={this.props.allLittles}
//                 />}/>)
//         } else {
//             return null
//         }
//     }

//     render() {
//         return(
//             this.currentContainer(this.props.userType)
//         )
//     }


// }

// export default MainContainer