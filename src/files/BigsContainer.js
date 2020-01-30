import React from 'react';
import Big from './Big';


class BigsContainer extends React.Component {

    render() {
        return (
            this.props.allBigs.map(big => {
                return(
                    <Big
                        key={big.id}
                        big={big}
                    />
                )
            })
        )
    }
}

export default BigsContainer

