import React from 'react';
import Spinner from '../gif/Spinner.gif';
const Loader = () => {
    return (
        <div>
            <h1>Loading...</h1>
            <img src={Spinner} alt="loading"/>
            
        </div>
    );
};

export default Loader;