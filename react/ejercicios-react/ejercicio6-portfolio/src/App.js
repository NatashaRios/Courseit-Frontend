import React from 'react';
import NavBar from './componentes/Navbar';
import Avatar from './componentes/Avatar';
import Bio from "./componentes/Bio";
import Projects from "./componentes/Projects";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      github: "",
      repos: []
    }
  }

  async componentDidMount() {
    const getGithub = await fetch ("https://api.github.com/users/natasharios");
    const getRepo = await fetch("https://api.github.com/users/natasharios/repos");
    const getGithubJson = await getGithub.json();
    const getRepoJson = await getRepo.json();

    this.setState({
      github: getGithubJson,
      repos: getRepoJson
    })
    console.log(this.state.repos);
  }
  render() {
    const { github } = this.state;
    const { repos } = this.state;
    return (
      <React.Fragment>
        <NavBar name={github.login} />
        <Avatar img={github.avatar_url} />
        <Bio bio={github.bio} />
        <Projects repos={repos} />
      </React.Fragment>
    )
  }
}

export default App;
