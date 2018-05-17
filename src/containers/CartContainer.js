import React, {Component} from 'react';
import Cart from './../components/Cart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Messages from './../constants/Message';
import {actDeleteCartItem, actOnChangeMessage, actUpdateCart} from "../actions/index";

class CartContainer extends Component {
	constructor () {
		super();
		this.totalAmount = 0;
	}
	render () {
		const { cart } = this.props;
		return (
			<Cart>
				{ this.showCart(cart) }
				{ this.showCartResult(cart) }
			</Cart>
		);
	}

	showCart (cart) {
		if (cart && Array.isArray(cart) && cart.length > 0) {
			this.totalAmount = 0;
			return cart.map((item, pos) => {
				if (item !== null) {
					this.totalAmount += item.product.price * item.quantity;
					return <CartItem
						cartItem={ item }
						key={ pos }
						onDeleteCartItem={ this.props.onDeleteCartItem }
						onChangeMessage={ this.props.onChangeMessage }
						onUpdateCart={ this.props.onUpdateCart }
					/>
				} else {
					return null;
				}
			});
		}
		return (
			<tr>
				<th>{ Messages.MSG_EMPTY_CART }</th>
			</tr>
		)
	}

	showCartResult (cart) {
		if (cart && Array.isArray(cart) && cart.length > 0) {
			return <CartResult totalAmount={ this.totalAmount } />;
		}
		return null;
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({

		}).isRequired,
		quantity: PropTypes.number.isRequired
	})).isRequired
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteCartItem: (id) => {
			dispatch(actDeleteCartItem (id));
		},
		onChangeMessage: (message) => {
			dispatch(actOnChangeMessage (message));
		},
		onUpdateCart: (cartItem) => {
			dispatch(actUpdateCart (cartItem));
		}
	}
};

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
