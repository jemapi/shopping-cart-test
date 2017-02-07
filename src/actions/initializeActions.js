"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CartApi = require('../api/cartApi');
var items = require('../api/itemData');

var InitializeActions = {
	initItems: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE_ITEMS,
			initialData: items
		});
	},
	initCart: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE_CART,
			initialData: {
				items: CartApi.getAllItems()
			}
		});
	}
};

module.exports = InitializeActions;
