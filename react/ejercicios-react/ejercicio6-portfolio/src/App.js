import React from 'react';
import NavBar from './componentes/Navbar';
import Avatar from './componentes/Avatar';
import Bio from "./componentes/Bio";
import Projects from "./componentes/Projects";
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      github: "",
      bio: "",
      avatar: "",
      repos: []
    }
  }

  async componentDidMount() {
    const getGithub = await axios ("https://api.github.com/users/natasharios");
    const getRepo = await axios ("https://api.github.com/users/natasharios/repos");
    

    const {name, bio, avatar_url} = getGithub.data
    this.setState({
      github: name,
      bio: bio,
      avatar: avatar_url,
      repos: getRepo.data
    })
    console.log(this.state.repos);
  }
  render() {
    const { github, bio, avatar } = this.state;
    const { repos } = this.state;
    return (
      <React.Fragment>
        <NavBar name={github} />
        <Avatar img={avatar} />
        <Bio bio={bio} />
        <Projects repos={repos} />
      </React.Fragment>
    )
  }
}

export default App;
