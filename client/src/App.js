import React from 'react';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      player: []
    };
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => this.setState({
        player: res.data
      }))
      .catch(e => console.log(e));
  }

  render() {

    return (
      <div className="App">
        {console.log(this.state.player)}
        {<PlayerCard
          key={this.state.player.id}
          name={this.state.player.name}
          country={this.state.player.country}
          searches={this.state.player.searches}
        />}
      </div>
      );
      }
  }

export default App;
