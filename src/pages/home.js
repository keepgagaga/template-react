import React from 'react';
import '../style/home.css';
import Weather from './weather';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                home page
                <Weather></Weather>
            </div>
        )
    }
}

export default Home;