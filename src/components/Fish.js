import React, { Component } from "react";

class Fish extends Component {
	render() {
		return <li className="menu-fish">{this.props.details.name}</li>;
	}
}

export default Fish;
