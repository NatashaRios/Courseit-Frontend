import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [githubData, setGithubData] = useState({});
  const [reposData, setReposData] = useState([]);
  useEffect(() => {
    fetchData('https://api.github.com/users/natasharios', setGithubData);
    fetchData('https://api.github.com/users/natasharios/repos', setReposData);
  }, [])

  async function fetchData(url, setter){
    const getData = await fetch(url);
    const json = await getData.json();

    setter(json);
  }
  
  const contextData = {
    info: githubData,
    repos: reposData
  }

  return (
    <ThemeProvider value={contextData}>
      <Navbar />
      <div className='content'>
        <Avatar />
        <Bio />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
