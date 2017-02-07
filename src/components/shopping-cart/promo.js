"use strict";

var React = require('react');

var Promo = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},

	render: function() {
		var item = this.props.item;

		var discount = 0;
		if (item.promo) {
			discount = (Math.floor(item.quantity / 3) * item.unitaryCost);
		}

		if (discount !== 0) {
			discount = -1 * discount;
		}

		return discount < 0 && item.promo ? (
			<div>
				Discount<br/><span className="cart_discount">{parseFloat(discount).toFixed(2)}€</span>
				<br/>
			</div>
		) : (
			<div></div>
		);
	}
});

module.exports = Promo;
