"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initItems();
InitializeActions.initCart();

Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
