import React, {Component} from 'react';

class Cart extends Component {
	render() {
		return (
			<table className="table product-table">
				<thead>
				<tr>
					<th></th>
					<th>Sản Phẩm</th>
					<th>Giá</th>
					<th>Số Lượng</th>
					<th>Tổng Cộng</th>
					<th></th>
				</tr>
				</thead>
				<tbody>
				{ this.props.children }
				</tbody>
			</table>
		);
	}
}

export default Cart;
