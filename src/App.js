import './App.css';
import Testing from './components/Testing';
// imports
import responses from './model/response';
import { useState, useEffect } from 'react';
import Button from './components/Button';


function App() {
  const [reply, setReply] = useState('WHAT DO YOU WANT?!?')

  function fortune() {
    // setReply('Working?')
    let random = Math.floor(Math.random()*20);
    setReply(responses[random])
  }


  // change
  // const answer = () => {
  //   setReply(reply)
  // }

  useEffect(()=>{
    // let random = Math.floor(Math.random()*20);
    // setReply(responses[random])

    // console.log('USE EFFECT WORKING??')
    return () => console.log('is the return working?', {reply})
  }, [reply])


  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>
      {/* <p>{reply}</p> */}
      <Testing test={reply}/>
      <button onClick={fortune}>Feeling Lucky?</button>
      {/* <Button answer={answer}/> */}
    </div>
  );
}

export default App;
