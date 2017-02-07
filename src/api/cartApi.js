"use strict";

//This file is mocking a web API by hitting hard coded data.
var items = [];
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var CartApi = {
	getAllItems: function() {
		return _clone(items);
	},

	getItemById: function(id) {
		var item = _.find(items, {name: id});
		return _clone(item);
	},

	saveItem: function(item) {
		if (item.name) {
			var existingItemIndex = _.indexOf(items, _.find(items, {name: item.name}));
			items.splice(existingItemIndex, 1, item);
		} else {
			items.push(item);
		}

		return _clone(item);
	},

	deleteItem: function(id) {
		_.remove(items, {name: id});
	}
};

module.exports = CartApi;
