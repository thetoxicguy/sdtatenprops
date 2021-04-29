import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import Video from './components/video'

function AppVideo() {
  // we get 2 pieces from useState to put inside the brackets:
  // the variable (counter) and the function (setCounter) to operate this variable
  // the starting point for this state begins at 0
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    // We define the function setCounter inside the parenthesis
    // (toggles the previous known state)
    // setCounter((prev) => !prev);
    // the following does the same
    setToggle(!toggle);
    console.log(toggle)
  }
  const incrementer = () => {
    // We define the function setCounter inside the parenthesis
    // (adds 1 to the previous known state)
    // setCounter((prev) => prev + 1);
    // the following does the same
    setCounter(counter + 1);
    console.log(counter)
  }
  return (
    <div className="App">
        <nav>
            <Video nr = {counter}/>
        </nav>
    </div>
  );
}

export default AppVideo;
