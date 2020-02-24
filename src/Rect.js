import React, {Component} from 'react';

class Rect extends Component {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  color = "white";
  style = {};

  constructor(props){
    super(props);
    this.x = props.x;
    this.y = props.y;
    this.width = props.w;
    this.height = props.h;
    this.color = props.c;
    this.radius = props.r;
    this.style = {
      backgroundColor: this.color,
      borderRadius: this.radius + "px",
      height: this.height + "px",
      left: this.x + "px",
      position: "absolute",
      top: this.y + "px",
      width: this.width + "px"
    }
  }

  render(){
    return <div style={this.style}></div>;
  }
}

export default Rect;