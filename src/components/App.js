import React, { Component } from "react";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fishes: {},
			order: {}
		};

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples(this);
	}

	addFish(fish) {
		const fishes = { ...this.state.fishes };
		const timestamp = Date.now();

		fishes[`fish-${timestamp}`] = fish;
		this.setState({ fishes });
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="list-of-fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish key={key} details={this.state.fishes[key]} />
						)}
					</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		);
	}
}

export default App;
