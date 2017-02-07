"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var CartStore = require('../../stores/cartStore');
var CartActions = require('../../actions/cartActions');
var Promo = require('./promo');

var CartList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired
	},

	addItem: function(item, event) {
		event.preventDefault();
		CartActions.createItem(item);
	},

	removeItem: function(id, event) {
		event.preventDefault();
		CartActions.deleteItem(id);
	},

	removeItemAll: function(id, event) {
		event.preventDefault();
		CartActions.deleteItemAll(id);
	},

	render: function() {
		var total = 0;
		var itemRow = function(item) {
			var discount = 0;
			var promo = item.promo ?
			discount = (Math.floor(item.quantity / 3) * item.unitaryCost)
			:
			discount = 0;

			total = total + ((item.unitaryCost * item.quantity) - discount);

			return (
				<li key={item.name} className="cartItem">
					<div style={{'float': 'left'}}>
						<button type="button" className="btn btn-danger" onClick={this.removeItemAll.bind(this, item.name)}>Delete</button>
						&nbsp;&nbsp;
						<span className="cart_name">{item.name}</span>
					</div>
					<div style={{'float': 'right', 'padding': '5px 10px', 'textAlign': 'right'}}>
						Units <span className="cart_quantity"><button type="button" className="btn btn-primary btn-xs" onClick={this.removeItem.bind(this, item.name)}>-</button> {parseFloat(item.quantity).toFixed(0)} <button type="button" className="btn btn-primary btn-xs" onClick={this.addItem.bind(this, item)}>+</button></span>
						<br/>
						Cost Per Unit<br/><span className="cart_cost">{parseFloat(item.unitaryCost).toFixed(2)}€</span>
						<br/>
						<Promo item={item}></Promo>
						Total<br/><span className="cart_subtotal">{parseFloat((item.unitaryCost * item.quantity) - discount).toFixed(2)}€</span>
					</div>
					<div style={{'clear': 'both'}}></div>
				</li>
			);
		};

		var itemsMapped = this.props.items.map(itemRow, this);

		return (
			<div>
				<div className="cartItem">
					<div style={{'float': 'left'}}>
						<span className="cart_total_name">TOTAL</span>
					</div>
					<div style={{'float': 'right', 'padding': '5px 10px', 'textAlign': 'right'}}>
						Total<br/><span className="cart_total">{parseFloat(total).toFixed(2)}€</span>
						</div>
					<div style={{'clear': 'both'}}></div>
				</div>
				{this.props.items.length === 0 ? (
					<h3>No Items Added to Cart</h3>
				) : (
					<ul className="list-unstyled">
					{this.props.items.map(itemRow, this)}
					</ul>
				)}
			</div>
		);
	}
});

module.exports = CartList;
