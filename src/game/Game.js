import logo from './Dartboardlogo.svg';
import './Game.css';
import React from 'react';
import Dartboard from './Dartboard';
import Scoreboard from './Scoreboard'
//import ReactDOM from 'react-dom';


//players


class Game extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      gameSession :'local',
      gameType: '501',
      players: [this.props.p1, this.props.p2],
      playersScore: [501,501],
      gameThrowsLeft: 3,
      isPlayer1Turn: true, //won't be binary for ever when more than 2 are playing.
    };

    this.handleThrow = this.handleThrow.bind(this);
  }
  
  updateLocalGameOnThrow(i){

    //get score and throws
    const throwScore = i.frame*i.ring.multiplier;
    const throws = this.state.gameThrowsLeft-1;
    var pScores = [...this.state.playersScore];
    console.log(pScores);
    //decrement throws left
    this.setState({gameThrowsLeft: throws});
    
    //update score of player
    if(this.state.isPlayer1Turn){
      //update player1score
      pScores[0] = pScores[0]-throwScore;
      this.setState({playersScore: pScores });
    }
    else{
      pScores[1] = pScores[1]-throwScore;
      this.setState({playersScore: pScores });
    }
      //if 0 throws, flip player and reset throws. need a timer or something to animate swap
    if(throws === 0){
      this.setState({gameThrowsLeft: 3});
      this.setState({isPlayer1Turn: !this.state.isPlayer1Turn});
    }

  }

  //called by dartboard every time a score is captured by click
  handleThrow(i){
    if(this.state.gameSession === 'local')
    {//local session, call local rules
      this.updateLocalGameOnThrow(i);
      console.log(i);
      //
    }
    else{
      //for now, shouldn't happen. Eventually will send to server via socket
    }

  }
  render() {
    const players = [...this.state.players]
    const scores = [...this.state.playersScore]
    return (
      <div>
        <h4>bullseye.io</h4>
        <img src={logo} className="Game-logo" alt="logo" />    
        <Dartboard onClick={this.handleThrow}/>
        <Scoreboard 
          players={players} 
          playersScore ={scores}
          throwsLeft = {this.state.gameThrowsLeft} 
          isPlayer1Turn={this.state.isPlayer1Turn}
          />
      </div>
      
    );
  }
}

export default Game