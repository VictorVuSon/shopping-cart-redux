import React, {Component} from 'react';
import Cart from './../components/Cart';
import { connect } from 'react-redux';


class CartContainer extends Component {
	render() {
		var { cart } = this.props;
		return (
			<Cart products={ cart } />
		);
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
};

export default connect(mapStateToProps, null)(CartContainer);
