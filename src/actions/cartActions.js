"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CartApi = require('../api/cartApi');
var ActionTypes = require('../constants/actionTypes');

var CartActions = {
	createItem: function(item) {
		var newItem = CartApi.saveItem(item);

		//Hey dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_CART_ITEM,
			item: newItem
		});
	},

	deleteItem: function(id) {
		CartApi.deleteItem(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_CART_ITEM,
			id: id
		});
	},

	deleteItemAll: function(id) {
		CartApi.deleteItem(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_CART_ITEM_ALL,
			id: id
		});
	}
};

module.exports = CartActions;
