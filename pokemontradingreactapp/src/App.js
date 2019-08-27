import React from 'react';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
    this.getUsername = this.getUsername.bind(this);
    this.setUsername = this.setUsername.bind(this);
  }

  getUsername() {
    return this.state.username;
  }

  async setUsername(user) {
    console.log('test');
    await this.setState({
      username: user
    })
    
  }

  render() {
    return (
      <div className = "app">
        <Header setUser={this.setUsername}/>
        <Pokemon getUser={this.getUsername}/>
      </div>
    );
  }
}

export default App;
