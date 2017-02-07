"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var CartActions = require('../../actions/cartActions');

var ItemList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired
	},

	addItem: function(item, event) {
		event.preventDefault();
		CartActions.createItem(item);
	},

	render: function() {
		var itemRow = function(item) {
			return (
				<li key={item.name} className="itemPick">
					<div style={{'float': 'left'}}>
						<button type="button" className="btn btn-primary" onClick={this.addItem.bind(this, item)}>Add</button>
						&nbsp;&nbsp;
						<span className="item_name">{item.name}</span>
					</div>
					<div style={{'float': 'right', 'padding': '5px 10px', 'textAlign': 'right'}}>
						Cost Per Unit<br/><span className="item_cost">{parseFloat(item.unitaryCost).toFixed(2)}€</span>
				</div>
				<div style={{'clear': 'both'}}></div>
			</li>
		);
	};

	return (
		<ul className="list-unstyled">
			{this.props.items.map(itemRow, this)}
		</ul>
	);
}
});

module.exports = ItemList;
