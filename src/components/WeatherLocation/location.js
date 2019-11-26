import React, {Component} from 'react';

class Location extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.city !== this.state.city);
    }
    
    render() {
        const {city} = this.state;
        return (<div className="locationCont">
                    <h1>{city}</h1>
                    {/* { city.substring(0, city.indexOf(','))} */}
                </div>);
    }
}

export default Location;