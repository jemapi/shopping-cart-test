/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
var CartComponent = require('./shopping-cart/cartComponent');
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<div className="row">
						<div id="left" className="col-md-9">
							<RouteHandler/>
						</div>
						<div id="right" className="col-md-3">
							<CartComponent></CartComponent>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;
