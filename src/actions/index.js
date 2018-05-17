import * as types from '../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
	return {
		type: types.ADD_TO_CARD,
		product,
		quantity
	}
};

export const actOnChangeMessage = (message) => {
	return {
		type: types.CHANGE_MESSAGE,
		message,
	}
};

export const actDeleteCartItem = (id) => {
	return {
		type: types.DELETE_CART_ITEM,
		id,
	}
};

export const actUpdateCart = (cartItem) => {
	return {
		type: types.UPDATE_CART,
		cartItem,
	}
};