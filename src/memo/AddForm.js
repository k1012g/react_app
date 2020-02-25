import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component {
	input = {
		color: "#006",
		fontSize: "16pt",
		margin: "5px 0px",
		padding: "1px"
	};

	btn = {
		color: "#006",
		fontSize: "14pt",
		padding: "2px 10px"
	};

	constructor(props){
		super(props);
		this.state = {
			message: ''
		};
		this.doChange = this.doChange.bind(this);
		this.doAction = this.doAction.bind(this);
	};

	doChange(e){
		this.setState({
			message: e.target.value
		});
	};

	doAction(e){
		e.preventDefault();

		let action = addMemo(this.state.message);

		this.props.dispatch(action);
		this.setState({
			message: ''
		});
	};

	render(){
		return (
			<div>
				<p style={this.message}>{this.props.message}</p>
				<form onSubmit={this.doAction}>
					<input type="text" size="40" onChange={this.doChange} style={this.input} value={this.state.message} required />
					<input type="submit" style={this.btn} value="Add" />
				</form>
			</div>
		);
	};
};

export default connect((state) => state)(AddForm);