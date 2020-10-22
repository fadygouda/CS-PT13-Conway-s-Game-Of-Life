import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/grid'
import Buttons from './components/buttons'
import HowToPlay from './components/howtoplay'



class App extends React.Component {
  constructor() {
    super();
    this.rows = 25;
    this.cols = 25;
    this.speed = 300;
    ;
    
    this.state = {
      generation: 0,
      running: false,
      fullGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false))

    }
  }
  selectBox = (row, col) => {
    let copy = clone(this.state.fullGrid)
    copy[row][col] = !copy[row][col]
    this.setState({
      fullGrid: copy
    })
  }

  speedUp = () => {
    this.speed = 50;
    this.playButton();
  }
  slowDown = () => {
    this.speed = 500;
    this.playButton();
  }

  playButton = () => {
    console.log("play")
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed)
  }

  pauseButton = () => {
    clearInterval(this.intervalId);
    console.log("seed")
  }

  glider = () => {
    let copy = Array(this.rows).fill().map(() => Array(this.cols).fill(false));

    copy[2][4] = "box on";
    copy[3][2] = "box on";
    copy[3][4] = "box on";
    copy[4][3] = "box on";
    copy[4][4] = "box on";

    this.setState({
      fullGrid: copy,
      generation: 0
    })
    this.pauseButton();
  }
  plusSign = () => {
    let copy = Array(this.rows).fill().map(() => Array(this.cols).fill(false));

    copy[12][12] = "box on";
    copy[13][12] = "box on";
    copy[11][12] = "box on";
    copy[12][13] = "box on";
    copy[12][11] = "box on";

    this.setState({
      fullGrid: copy,
      generation: 0
    })
    this.pauseButton();
  }
  
  play = () => {
    let grid = this.state.fullGrid;
    let grid2 = clone(this.state.fullGrid);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0
        if (i > 0) if (grid[i-1][j]) count++;
        if( i > 0 && j > 0) if(grid[i-1][j-1]) count++;
        if (i > 0 && j < this.cols -1) if (grid[i-1][j+1]) count++;
        if (j < this.cols -1) if (grid[i][j+1]) count++;
        if (j > 0) if (grid[i][j-1]) count++;
        if (i < this.rows -1) if (grid[i+1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (grid[i+1][j-1]) count++;
        if (i < this.rows - 1 && j < this.cols-1) if(grid[i+1][j+1]) count++;
        if(grid[i][j] && (count <2 || count > 3)) grid2[i][j] = false;
        if (!grid[i][j] && count === 3) grid2[i][j] = true;

      }
    }
    this.setState({
      fullGrid: grid2,
      generation: this.state.generation + 1
    })
  }

  randomSeed = () => {
    clearInterval(this.intervalId)
    let copy = clone(this.state.fullGrid);
    for(let i = 0; i < this.rows; i++) {
      for(let j = 0; j <this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          copy[i][j] = true;
        }
      }
    }
    this.setState({
      fullGrid: copy
    })
  }
  
  clear = () => {
    this.pauseButton();
    let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
    this.setState({
      fullGrid: grid,
      generation: 0
    })
  }
  
  render() {
    return (
      <div className = "app">
        <div>
          <h1>The Game of Life</h1>
        
          <Buttons
            playButton={this.playButton}
            randomSeed={this.randomSeed}
            pauseButton={this.pauseButton}
            glider={this.glider}
            clear = {this.clear}
            speedUp = {this.speedUp}
            plusSign = {this.plusSign}
            slowDown = {this.slowDown}
          />
          <Grid 
            rows = {this.rows}
            cols = {this.cols}
            fullGrid = {this.state.fullGrid}
            selectBox = {this.selectBox}
          />
          <br />
          <h2>Generations: {this.state.generation}</h2> <br />
        </div>
        <div>
          <HowToPlay />
        </div>
      </div>
    )
  }
}

const clone = (arr) => {
  return JSON.parse(JSON.stringify(arr))
}

export default App;
