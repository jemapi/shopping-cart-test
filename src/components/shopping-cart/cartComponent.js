"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var CartStore = require('../../stores/cartStore');
var CartActions = require('../../actions/cartActions');
var CartList = require('./cartList');

var CartComponent = React.createClass({
	getInitialState: function() {
		return {
			items: CartStore.getAllItems()
		};
	},

	componentWillMount: function() {
		CartStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		CartStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ items: CartStore.getAllItems() });
	},

	render: function() {
		return (
			<div>
				<h1>Cart</h1>
				<CartList items={this.state.items}></CartList>
			</div>
		);
	}
});

module.exports = CartComponent;
