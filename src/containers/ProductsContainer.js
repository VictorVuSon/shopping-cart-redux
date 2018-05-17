import React, {Component} from 'react';
import Products from './../components/Products';
import { connect } from 'react-redux';
import Product from './../components/Product';
import {actAddToCart, actOnChangeMessage} from "../actions/index";

class ProductsContainer extends Component {
	render() {
		var { products } = this.props;
		return (
			<Products> { this.showProducts(products) } </Products>
		);
	}

	showProducts = (products) => {
		if (!products || !Array.isArray(products) || products.length === 0) {
			return [];
		}
		return products.map(item => <Product
			key={item.id}
			product={item}
			onAddToCart={this.props.onAddToCart}
			onChangeMessage={this.props.onChangeMessage}
		/>);
	}
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) => {
			dispatch(actAddToCart (product, 1));
		},
		onChangeMessage: (message) => {
			dispatch(actOnChangeMessage (message));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
