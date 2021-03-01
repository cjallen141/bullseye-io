import React from 'react';
//import ReactDOM from 'react-dom';

const defaultRings = {
  OFFBOARD: {name : 'offBoard', abbr:'OB', multiplier: 0},
  BORDER:   { name: 'border', abbr: 'M', multiplier: 0 },
  DOUBLE:   { name: 'double', abbr: 'D', multiplier: 2 },
  OUTER_SINGLE: { name: 'outerSingle', abbr: 'S', multiplier: 1 },
  TRIPLE:   { name: 'triple', abbr: 'T', multiplier: 3 },
  INNER_SINGLE: { name: 'innerSingle', abbr: 'S', multiplier: 1 },
}
 // OUTER_BULL: { name: 'outerBull', abbr: 'B', multiplier: 1 },
 // INNER_BULL: { name: 'innerBull', abbr: 'DB', multiplier: 1 },

const defaultBeds = [
  { frame: 20, position: 1, color: 'Dark' },
  { frame: 1, position: 2, color: 'Light' },
  { frame: 18, position: 3, color: 'Dark' },
  { frame: 4, position: 4, color: 'Light' },
  { frame: 13, position: 5, color: 'Dark' },
  { frame: 6, position: 6, color: 'Light' },
  { frame: 10, position: 7, color: 'Dark' },
  { frame: 15, position: 8, color: 'Light' },
  { frame: 2, position: 9, color: 'Dark' },
  { frame: 17, position: 10, color: 'Light' },
  { frame: 3, position: 11, color: 'Dark' },
  { frame: 19, position: 12, color: 'Light' },
  { frame: 7, position: 13, color: 'Dark' },
  { frame: 16, position: 14, color: 'Light' },
  { frame: 8, position: 15, color: 'Dark' },
  { frame: 11, position: 16, color: 'Light' },
  { frame: 14, position: 17, color: 'Dark' },
  { frame: 9, position: 18, color: 'Light' },
  { frame: 12, position: 19, color: 'Dark' },
  { frame: 5, position: 20, color: 'Light' },
]

function Bed(props){
  return (
    <button className="bed" onClick={() => props.onClick(props.value)}>
      {props.value}-
      {props.ring.name}      
    </button>
  );
}

class Dartboard extends React.Component {

  renderBed(i) {
    //console.log(i)
    return (
      <Bed
        value={i.frame}
        position={i.position}
        ring={i.ring}
        //value={i} 
        onClick={() => this.props.onClick(i)}
      />
    );
  }

 // handleClick(i){
    //console.log(i);
    //for now, just output the score value to the console
  //  console.log(i.frame*i.ring.multiplier)
  //  return;
  //}
  render() {
    //create bed for every frame * default ring = every bed (minus bullseye)
    const frameBeds = defaultBeds.map(frame => {
      return (
      <div className="board-row">
        {this.renderBed({frame: frame.frame, position:frame.position, ring: defaultRings.OFFBOARD})}
        {this.renderBed({frame: frame.frame, position:frame.position, ring: defaultRings.BORDER})}
        {this.renderBed({frame: frame.frame, position:frame.position, ring: defaultRings.DOUBLE})}
        {this.renderBed({frame: frame.frame, position:frame.position, ring: defaultRings.OUTER_SINGLE})}
        {this.renderBed({frame: frame.frame, position:frame.position, ring: defaultRings.TRIPLE})}
        {this.renderBed({frame: frame.frame, position:frame.position, ring: defaultRings.INNER_SINGLE})}
        
      </div>
      )    
    })
    return (
      <div>
        {frameBeds}
      </div>
    )
  }
}



export default Dartboard