import * as types from './../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data || [];

const cart = (state = initialState, action) => {
	let index = -1;
	switch (action.type) {
		case types.ADD_TO_CARD:
			index = findProductInCart(state, action.product);
			if (index !== -1) {
				const existItem = state[index];
				existItem.quantity += action.quantity;
				state[index] = existItem;
			} else {
				state.push({
					product: action.product,
					quantity: action.quantity
				});
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [ ...state ];
		case types.DELETE_CART_ITEM:
			index = findProductInCart(state, {
				id: action.id
			});
			if (index !== -1) {
				state.splice(index, 1);
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [ ...state ];

		case types.UPDATE_CART:
			index = findProductInCart(state, action.cartItem.product);
			if (index !== -1) {
				if (action.cartItem.quantity === 0) {
					state.splice(index, 1);
				} else {
					state[index] = action.cartItem;
				}
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [ ...state ];
		default:
			return [ ...state ];
	}
};

const findProductInCart = (state, product) => {
	if (state.length > 0) {
		for (let i = 0; i <= state.length - 1; i++) {
			if (state[i].product.id === product.id) {
				return i;
			}
		}
	}
	return -1;
};

export default cart;