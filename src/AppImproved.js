import './App.css';
import Nav2 from './components/Nav2'
import TweetsImproved from './components/TweetsImproved'

function AppImproved(props) {
  return (
    <div className="App">
      <h1>props taken from an array</h1>
      <div class="home">
        <Nav2/>
        <TweetsImproved />
      </div>
    </div>
  );
}

export default AppImproved;
