import logo from './Dartboardlogo.svg';
import './Game.css';
import React from 'react';
import Dartboard from './Dartboard';
//import ReactDOM from 'react-dom';



class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      player1: {name: 'babe', score: 0},
      player2: {name: 'meep', score: 0},
      isPlayer1Turn: true,
      throwsLeft: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  updateScore(){
    
  }

  //called by dartboard every time a score is captured by click
  handleClick(i){
    //called every time score is captured by click

    //output the data from throw to console
    console.log(i);

    //get score and throws
    const throwScore = i.frame*i.ring.multiplier;
    const throws = this.state.throwsLeft-1;
    //console.log(throws);
    //console.log(throwScore);
    //decrement throws left
    this.setState({throwsLeft: throws});
    //update score of player
    if(this.state.isPlayer1Turn){
      //update player1
      this.setState({player1: {name: this.state.player1.name, score: this.state.player1.score+throwScore}})
    }
    else{
      this.setState({player2: {name: this.state.player2.name, score: this.state.player2.score+throwScore}})
    }
    //if 0 throws, flip player and reset throws. need a timer or something to animate swap
    if(throws === 0){
      this.setState({throwsLeft: 3});
      this.setState({isPlayer1Turn: !this.state.isPlayer1Turn});
    }

  }
  render() {
    const p1 = this.state.player1;
    const p2 = this.state.player2;
    var playerThrowing;
    const throws = this.state.throwsLeft;

    if(this.state.isPlayer1Turn){
      playerThrowing = p1.name;
    }
    else {
      playerThrowing = p2.name;
    }
    return (
      <div>
            <h4>bullseye.io</h4>
            <img src={logo} className="Game-logo" alt="logo" />
            <div className="Game">
              <Dartboard onClick={this.handleClick}/>
          </div>
        <body>
          <div>
            <h4>Player throwing: {playerThrowing}. throws: {throws}</h4>
          </div>
          <div>
            <h3>{p1.name} score: {p1.score}</h3>
          </div>
          <div>
          <h3>{p2.name} score: {p2.score}</h3>
          </div>
        </body>
      </div>
    );
  }
}

export default Game