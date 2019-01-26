import React, { Component } from 'react';
import './css/style.css';
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <header className="App-header">
					<p>Bravo</p>
				</header> */}
				<Header />
				<Content />
			</div>
		);
	}
}

export default App;
