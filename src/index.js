//import  React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//import $ from 'jquery';

import './style.css';


ReactDOM.render(
<App />, 
document.getElementById('root')
);

function time(){
setTimeout( function(){
    ReactDOM.render(
    <h1>🤙Hola🤙</h1>, 
    document.getElementById('root')
    );
},3000);
setTimeout( function(){
    ReactDOM.render(
        <>
    <div className="header"></div>
    <div className="body">
        <img></img>
        <section className='profile'>
            <h2>Personal Profile</h2>
            <p>I am a personal and professional IT technician. I am currently studying the pedagogical section and the career of Systems Engineering. I work in
team and I learn quickly, in the face of the difficulties that arise, I adapt and solve them correctly.</p>
        </section>
        <section className='academic'>
            <h2>Academic Profile</h2>
            <h3>Education Secondary</h3>
            <p>Instituto Tecnico Emilio Lamarca - DIEGEP 4430</p>
            <h3>Education Superior</h3>
            <p>Pedagogical Subjects - Azul Formacion Superior (University of Business and Social Sciences)</p>
            <h3>University Education</h3>
            <p>Information Systems Engineering National Technological University</p>
        </section>
        <section className='experience'>
            <h2>Experience</h2>
            <h3>School support teacher</h3>
            <h3>Attendant of carrying out animation activities for a group of young people in camps and recreational outings</h3>
            <h3>Computer repair</h3>
            <h3>Software Developer</h3>

        </section>
        <section className='skills'>
            <h2>Skills</h2>
            <div className='idiom'><h3>Languages</h3>
            <p>Spanish - Native</p>
            <p>English - Fluent</p>
            </div>
            <div className='programming'>
            <h3>Programming Languages</h3>
            <p>JavaScript - Fluent</p>
            <p>HTML - Fluent</p>
            <p>CSS - Fluent</p>
            <p>PHP - Fluent</p>
            <p>SQL - Fluent</p>
            <p>C# - Fluent</p>
            <p>C++ - Fluent</p>
            <p>Python - Fluent</p>
            <p>Arduino -Fluent</p>
            </div>
            <div className='tools'>
            <h3>Certificates</h3>
            <p>computer security</p>
            <p>computer security - servers</p>
            <p>computer security - perimeter</p>
            <p>microcontroller programmer</p>
            <p>microcontroller programmer - arduino</p>
            <p>IT technical analyst</p>
            </div>
        </section>
        <section className='contact'>
            <h2>Contact</h2>
            <p>Phone: <a href='https://wa.me/5491123126177'>+54 9 11 2312-6177</a></p>
            <p>Email: <a href='mailto:gonnron@gmial.com'>gonnron@gmail.com</a></p>
        </section>
    </div> 
    <div className='proejcts'></div>
    <div className="footer"></div>
    <div className="dialog"></div>
    </>, 
    document.getElementById('root')
    );
},4000)
}
time()
