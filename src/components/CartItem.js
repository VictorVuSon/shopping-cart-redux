import React, {Component} from 'react';
import * as Messages from './../constants/Message';

class CartItem extends Component {
	render() {
		const { cartItem, onDeleteCartItem, onChangeMessage } = this.props;
		return (
			<tr>
				<th scope="row">
					<img
						src={ cartItem.product.image }
						alt="" className="img-fluid z-depth-0"/>
				</th>
				<td>
					<h5>
						<strong>{ cartItem.product.name }</strong>
					</h5>
				</td>
				<td>{ cartItem.product.price }$</td>
				<td className="center-on-small-only">
					<span className="qty">{ cartItem.quantity } </span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick={ () => this.onUpdateCart(cartItem, cartItem.quantity > 0 ? cartItem.quantity -= 1 : cartItem.quantity) }
						>
							<a>—</a>
						</label>
						<label
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick={ () => this.onUpdateCart(cartItem, cartItem.quantity += 1) }
						>
							<a>+</a>
						</label>
					</div>
				</td>
				<td>{ cartItem.product.price * cartItem.quantity }$</td>
				<td>
					<button type="button"
					        className="btn btn-sm btn-primary waves-effect waves-light"
					        data-toggle="tooltip" data-placement="top"
					        title="" data-original-title="Remove item"
					        onClick={ () => {
					        	onDeleteCartItem(cartItem.product.id);
					        	onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS)
					        } }
					>
						X
					</button>
				</td>
			</tr>
		);
	}

	onUpdateCart = (cartItem, quantity) => {
		const { onUpdateCart, onChangeMessage } = this.props;
		cartItem.quantity = quantity;
		onUpdateCart(cartItem);
		onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS);
	}

}

export default CartItem;
