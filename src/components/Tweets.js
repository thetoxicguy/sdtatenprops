import React from 'react';
import Tweet from './Tweet'

const Tweets = (props) => {
    return (
    <div>
        <section>
            <Tweet name={props.name} message = {props.message}/>
        </section>
    </div>
    )
};

export default Tweets;