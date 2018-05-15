import React, {Component} from 'react';
import Header from './components/Header';
import Products from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './containers/CartContainer';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="mainContainer">
					<div className="container">
						<Products />
						<Message />
						<section className="section">
							<div className="table-responsive">
								<Cart />
							</div>
						</section>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
