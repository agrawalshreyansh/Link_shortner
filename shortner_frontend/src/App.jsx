
import './App.css';
import { useState } from 'react';
import paste from './assets/paste.png'
import InputBar from './components/input_bar';
import copy from './assets/copy.png';
import Nav from './components/nav'


function App() {

  const [InputVal, setInputVal] = useState('');

  const [NewLink, setNewLink] = useState("");


  //handles clipboard pasting
  async function HandlePaste(e) {
    e.preventDefault()
  
    try {
      const clipboardText = await navigator.clipboard.readText();
      setInputVal(clipboardText);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  }

  async function ProvideLink(e) {
    e.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/home/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({'link': InputVal }),
      });

      try /*(response.ok)*/ {
          const data = await response.json();
          setNewLink('http://localhost:5173/'+data.shorturl)
          console.log('Response from server:', data.shorturl);
          
      } catch (err) {
          console.error('Failed to send generate short link! ',err);
          alert("Failed to generate link!")
      }
  } catch (error) {
      console.error('Error:', error);
  }
};

  async function copyToClipboard(e) {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(NewLink);
      
      alert('Copied!',NewLink)
    }
    catch(error) {
      console.error('Failed to read clipboard contents: ', error);
    }
  }



  return (
   <>
      <Nav/>
      <form className='link_form'>
        <div className='input_clip'>
          <InputBar InputVal={InputVal} setInputVal = {setInputVal} text={"Paste your link here"}/>
          <button onClick={HandlePaste} id='paste'><img src={paste}/></button>
        </div>
        <button type='submit' id='submit' onClick={ProvideLink}>Generate short link</button>
        <div className='input_clip'>
          <InputBar InputVal={NewLink} text={"Your link will appear here"} />
          <button onClick={copyToClipboard}  id='copy'><img src={copy}/></button>
        </div>
      </form>
   </>

  )
};

export default App;
