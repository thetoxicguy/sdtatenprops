import React from 'react';

const Video = (props) => {
    return(
        <div>
            <h1>Using states in children components</h1>
            <h2>Video {props.nr}</h2>
            <button onClick = {props.sToggle}>Toggle (in video)</button>
        </div>
    );
};

export default Video