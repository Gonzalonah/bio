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
const Display=(props)=>{
  return(
    <div>{props.counter}</div>
  )
}
const Button=(props)=>{
  //crear un boton reutilizable
  return(
    <button onClick={props.handleClick}>
      {/* //usa la prop de text para crear un boton reutilizable. */} 
      {props.text}
    </button>
  )
}
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementa1=()=>setCounter(counter+1)//suma
  const disminuye1=()=> setCounter(counter-1)//disminuye
  const initialiced = () => setCounter(0) //inicializa

  /*Para crear una nueva funcionabilidad(funcion) se crear un const con la funcion 
    y en el componente Button se lo pasa por la prop.handleClick mientras que el texto que se muestra
    lo pasa por la prop.text
  */
  return (
    <div>
      <Display counter={counter}/>{/* muestra el contador */}
        <Button handleClick={incrementa1} text='plus'/>
        <Button handleClick={disminuye1} text='minus'/>
        <Button handleClick={initialiced} text='zero'/>
      </div>
  )
}
const refresh=()=>{
  ReactDOM.render(    
    <App />
    , document.getElementById('root')
    );
  }
refresh()