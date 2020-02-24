import React, {Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {
  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ];

  msgStyle = {
    color: "#900",
    fontSize: "20pt",
    margin: "20px 0px",
    padding: "5px"
  };

  constructor(props){
    super(props);
    this.state = {
      list: this.data
    };
  };

  render(){
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show list.</h2>
      <List title="サンプル・リスト" data={this.data} />
    </div>;
  };
}

class List extends Component {
  number = 1;

  title = {
    color: "blue",
    fontSize: "20pt",
    fontWeight: "bold"
  };

  render(){
    let data = this.props.data;
    return (
      <div>
        <p style={this.title}>{this.props.title}</p>
          <ul>
            {data.map((item) =>
              <Item number={this.number++} value={item} key={this.number} />
            )}
          </ul>
      </div>
    );
  };
};

class Item extends Component {
  li = {
    listStyleType: "square",
    color: "#06",
    fontSize: "16pt",
    margin: "0px",
    padding: "0px"
  };

  num = {
    fontWeight: "bold",
    color: "red"
  };

  render(){
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
        {this.props.value}
      </li>
    );
  };
};
export default App;
