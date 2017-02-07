"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var ItemStore = require('../../stores/itemStore');
var ItemList = require('./itemList');

var ItemComponent = React.createClass({
	getInitialState: function() {
		return {
			items: ItemStore.getAllItems()
		};
	},

	componentWillMount: function() {
		ItemStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		ItemStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ items: ItemStore.getAllItems() });
	},

	render: function() {
		return (
			<div>
				<h1>Items</h1>
				<ItemList items={this.state.items}></ItemList>
			</div>
		);
	}
});

module.exports = ItemComponent;
