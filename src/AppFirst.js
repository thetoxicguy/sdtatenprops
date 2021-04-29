import './App.css';
import Nav2 from './components/Nav2'
import Tweets from './components/Tweets'

function AppFirst() {
  const name="Daniel";
  const message="This is my message to the world";
  return (
    <div className="App">
      <h1>props taken from a variable</h1>
      <div class="home">
        <Nav2 />
        <Tweets name={name} message={message} />
      </div>
    </div>
  );
}

export default AppFirst;
