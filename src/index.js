import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import './style.css';

/* 
//import  React from 'react';
//import App from './app';
//import $ from 'jquery';
ReactDOM.render(
<App />, 
document.getElementById('root')
);
function time(){
    setTimeout( function(){
        ReactDOM.render (
            <div className='init'>
                <section className='img'><img ></img></section>
                <section className= 'sections'>
                    <span id='profile'>Personal profile</span>
                    <span id='academic'>Academic profile</span>
                    <span id='experience'>Experience</span>
                    <span id='skills'>Skills</span>
                    <span id='contact'>Contact</span>
                </section>
            </div>, document.getElementById('root')
        );
    },2999)
    
};

time()
 */


  const App = () => {
    
    const [ counter, setCounter ] = useState(0)
    setTimeout(    
        () => setCounter(counter + 1),
        1000
      )
    return (
      <div>{counter}</div>
    )
  }

const refresh=()=>{
  ReactDOM.render(    
    <App />
    , document.getElementById('root')
    );
  }

  setInterval(()=>{
    
refresh()
counter += 1
  },1000)