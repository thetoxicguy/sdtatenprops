import React from 'react';
import TweetImproved from './TweetImproved';
  
  const TweetsImproved = () => {
    const messages = [
        {name: "Rebe", message: "I have a lot of work!"},
        {name: "Daniel", message: "I got exhausted yesterday"},
        {name: "Sofia", message: "My courtains installation is perfect!"},
        {name: "Diego", message: "The groups in the students' population are horrendous"},
        {name: "DanRoca", message: "What color Diego wants for the lamp?"},
    ]
      return (
      <section>
          <section>
              <h1>I have {messages.length} tweets</h1>
              {messages.map(
                  ((tweet) => (
                    <TweetImproved user = {tweet.name} post = {tweet.message} />
                  )
                  )
              )}
          </section>
      </section>
      )
  };
  
  export default TweetsImproved;