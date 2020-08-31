import React from 'react';
import CourseIt from './components/CourseIt/index'
import Curso from './components/Curso/index';
import Carousel from './components/Carousel/index';
import ImputMirror from './components/ImputMirror/index';
import Sum from './components/Sum/index';
import SumFunctional from './components/SumFunctional';
import './App.css';

function App() {
 
  return (
    <React.Fragment>
      <SumFunctional />
     {/*  <Sum />
      <ImputMirror />
      <CourseIt title='Hola CourseIt'/>
      <CourseIt title='Hola CourseIt'/>
      <Curso subtitle='Curso de Frontend avanzado' />
      <CourseIt title='Hola CourseIt'/>
      <CourseIt title='Hola CourseIt'/>
      <Carousel /> */}
    </React.Fragment>
  );
}

export default App;
