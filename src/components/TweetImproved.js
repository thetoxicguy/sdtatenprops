import React from 'react';

const TweetImproved = (props) => {
    return (
    <div>
        <h1>
            {props.user}
        </h1>
        <p>
            {props.post}
        </p><br/>
    </div>
    )
};

export default TweetImproved;