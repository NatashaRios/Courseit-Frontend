import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Component2 from './components/Component2';
import './App.css';

/* function App() {
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}

export default App; */

class App extends React.Component{
  render(){
    return(
      <ThemeProvider value='CourseIt'>
        <p>Primer componente</p>
        <Component2 />
      </ThemeProvider>
    )
  }
}

export default App;
