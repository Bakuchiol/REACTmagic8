import './App.css';
// imports
import responses from './model/response';
import { useState, useEffect } from 'react';
import Button from './components/Button';


function App() {
  const [reply, setReply] = useState(null)

  // change
  const answer = () => {
    setReply(reply)
  }

  // reset
  const reset = () => {
    setReply(null)
  }

  useEffect(()=>{
    let random = Math.floor(Math.random()*20);
    setReply(responses[random])
  }, [])

  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>
      <p>{reply}</p>
      <Button answer={answer}/>
    </div>
  );
}

export default App;
