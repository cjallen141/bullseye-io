import logo from './game/Dartboardlogo.svg';

import React, {Fragment, useState} from 'react';
import Game from './game/Game';
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
//import ReactDOM from 'react-dom';



const Home = () => (
    <Fragment>
        <h1>Home</h1>
        <main>
                    <nav>
                        <ul>
                            <li><Link to="/localgame">Start a Local Game</Link></li>
                        </ul>
                    </nav>
        </main>
    </Fragment>
)



const Contact = () => (
    <Fragment>
        <h1>Contact</h1>
        <h6>talk to me</h6>
    </Fragment>
)

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            player1name:'player1',
            player2name:'player2',
            didLocalGameStart: false,

        }
        this.startNewGame = this.startNewGame.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    startNewGame(players){
        console.log(this.state.player1name);
        console.log(this.state.player2name);
        this.setState({didLocalGameStart: true});
        console.log(players);
    }

    handleInputChange(event){

        const e = event;
        this.setState({[e.target.name]: e.target.value});
        console.log(e);
    }

   
    render() { 
        const player1 = this.state.player1name;
        const player2 = this.state.player2name;
        
        return (
            <Router>
                <main>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/localgame">Local Game</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/localgame">
                            {this.state.didLocalGameStart ? 
                                <Game p1={player1} p2={player2} gameMode={this.state.gameMode}/>
                                :
                                <form onSubmit={this.startNewGame}>
                                        <h4>Input players and select Game</h4>
                                        Player 1: <input type="text" name="player1name" value={this.state.player1name} onChange={this.handleInputChange} /><br />
                                        Player 2: <input type="text" name="player2name" value={this.state.player2name} onChange={this.handleInputChange} /><br />
                                        <div>
                                            501: <input type="radio" name="gameMode" value="501" checked={this.state.gameMode === "501"} onChange={this.handleInputChange} />
                                        </div>
                                        <input type="submit" value="Submit" />
                                </form> 
                            }
                        </Route>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </main>
            </Router>
        );

      /*if(this.state.didRedirect){
            return (
            
            <div>
                <h5>starting game..</h5>
            </div>
            )
        }
        else {
            return (
            <div>
                <h4>waiting for players...</h4>
                <form onSubmit={this.startNewGame}>
                    <label>
                        Player1:
                        <input type="text" name="player1name" 
                        value={this.state.player1name} onChange={this.handleInputChange} />
                        <input type="submit" value="Submit" />
                    </label>
                </form> 
            </div>

            )
        }
        */
    }

}


export default App