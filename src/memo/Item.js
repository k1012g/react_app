import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
	th = {
		backgroundColor: "blue",
		color: "white",
		fontSize: "14pt",
		padding: "5px 10px",
		width: "50px"
	};

	td = {
		backgroundColor: "white",
		border: "1px solid lightblue",
		color: "darkblue",
		fontSize: "14pt",
		minWidth: "300px",
		padding: "5px 10px"
	};

	data = {
		backgroundColor: "white",
		border: "1px solid lightblue",
		color: "darkblue",
		fontSize: "14pt",
		padding: "5px 10px",
		width: "80px"
	};

	render(){
		return (
			<tr>
				<th style={this.th}>
					No, {this.props.index}
				</th>
				<td style={this.td}>
					{this.props.value.message}
				</td>
				<td style={this.date}>
					{this.props.value.created}
				</td>
			</tr>
		);
	};
};

export default connect()(Item);