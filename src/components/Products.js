import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
	render() {
		var { products } = this.props;
		return (
			<section className="section">
				<h1 className="section-heading">Danh Sách Sản Phẩm</h1>
				<div className="row">
					{ this.showProducts(products) }
				</div>
			</section>
		);
	}

	showProducts = (products) => {
		if (!products || !Array.isArray(products) || products.length === 0) {
			return [];
		}
		return products.map(item => <Product key={item.id} product={item} />);
	}
}

export default Products;
