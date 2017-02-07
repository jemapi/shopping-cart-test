"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <Link to="app" className="navbar-brand">
                Shopping Cart Test Application
              </Link>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
