import React,{useState, useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Messege from './Messege';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
//useState = Variable in REACT, inorder to store anything.
//useEffect = A snippet code run on a condition.
    const [input, setInput] = useState('');
    
    const[messeges,setMesseges] = useState([]); 
      
    const[username, setUsername]= useState('');

  useEffect(() => {
    //run once when app component loads.
    db.collection('messeges').orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMesseges(snapshot.docs.map(doc => ({id:doc.id 
        ,messege:doc.data()})))
    });
  }, [])  
 
  useEffect(() => {
    //run code here...
    //const usename = prompt('Enter your name')
    setUsername(prompt('Enter your name'));
  }, [])// condition on which code runs, if [] then code run once.

    const sendMesseges = (event) => {
      event.preventDefault(); //to disable refreshing page when appending array.
      db.collection('messeges').add({
        messege: input,
        username:username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
     // setMesseges(
      //[...messeges,{username:username, text:input}]);// appending objects...
    setInput('');
    
  }
  return (
    <div className="App">
    <img src="https://scontent.fnag1-3.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png? _nc_cat=1&_nc_sid=6825c5&_nc_ohc=khm70eHINUYAX-x3EgV&_nc_ht=scontent.fnag1-3.fna&oh=db816303afc672787acdf9f098dea738&oe=5F312233"></img>
    <h1>Messenger App</h1>
    <h2>{username}</h2>
   
    <form className="app_form">
   <FormControl className="app_formcontrol" >
    
    <Input className="app_input" placeholder='Enter a message..' value={input} onChange={event => setInput(event.target.value)} />

    <IconButton className="app_icon" disabled={!input} variant="contained" color="primary"
     type='submit' onClick={sendMesseges}>
      <SendIcon/>
    </IconButton>
  

  </FormControl>
  </form>
     <FlipMove>
     {
      messeges.map(({id,messege}) => (  
    
        <Messege key={id} username={username} messege={messege}/>    
    ))
    } 
     </FlipMove>
  
    </div>
  );
}

export default App;
