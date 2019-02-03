import React, { Component } from 'react';
import './css/style.css';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default App;
