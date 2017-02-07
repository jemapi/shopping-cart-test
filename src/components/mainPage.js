"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ItemComponent = require('./shopping-cart/itemComponent');

var Home = React.createClass({
	render: function() {
		return (
			<ItemComponent></ItemComponent>
		);
	}
});

module.exports = Home;
