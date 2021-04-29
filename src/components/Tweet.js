import React from 'react';

const Tweet = (props) => {
    return (
    <div>
        <div>
            <h1>{props.name}</h1>
            <h3>{props.message}</h3>
        </div>
    </div>
    )
};

export default Tweet;