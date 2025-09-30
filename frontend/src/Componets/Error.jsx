import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="App">
            <p style={{ color: 'red' }}>{message}</p>
        </div>
    );
};

export default Error;