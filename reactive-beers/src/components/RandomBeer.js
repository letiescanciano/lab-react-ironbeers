import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Services from '../services/beer.services';
import BeerInfo from './BeerInfo';

class BeerDetails extends Component {
	constructor(props) {
		super(props);
		//console.log('Props que llegan a coaster details', this.props);
		this.state = { beer: {} };
		this.services = new Services();
	}

	componentDidMount() {
		this.services
			.getRandomBeer(this.props.match.params.id)
			.then((beer) => this.setState({ beer }))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<section>
				<Link className="home-nav" to="/">
					Home
				</Link>
				<BeerInfo beer={this.state.beer} />
			</section>
		);
	}
}

export default BeerDetails;
