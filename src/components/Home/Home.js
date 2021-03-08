import React from 'react';

const Home = (props) => {
    const { count } = props
    return (
        <div>
            <h2>This Is Home : {count} </h2>
        </div>
    );
};

export default Home;