"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'cart_update';

var _items = [];

var CartStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllItems: function() {
		return _items;
	},

	getItemById: function(id) {
		return _.find(_items, {id: id});
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE_CART:
			_items = action.initialData.items;
			CartStore.emitChange();
			break;
		case ActionTypes.CREATE_CART_ITEM:
			var existingItem = _.find(_items, {name: action.item.name});
			var existingItemIndex = _.indexOf(_items, existingItem);

			if (existingItemIndex !== -1) {
				existingItem.quantity++;
			} else {
				var newItem = {
					name: action.item.name,
					unitaryCost: action.item.unitaryCost,
					promo: action.item.promo,
					quantity: 1
				};
				_items.push(newItem);
				_items.sort(function(a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); } );
			}
			CartStore.emitChange();
			break;
		case ActionTypes.DELETE_CART_ITEM:
			var existingItemDelete = _.find(_items, {name: action.id});
			var existingItemDeleteIndex = _.indexOf(_items, existingItemDelete);

			if (existingItemDeleteIndex !== -1) {
				existingItemDelete.quantity--;
			}
			if (existingItemDelete.quantity === 0) {
				_.remove(_items, function(item) {
					return action.id === item.name;
				});
			}
			CartStore.emitChange();
			break;
		case ActionTypes.DELETE_CART_ITEM_ALL:
			_.remove(_items, function(item) {
				return action.id === item.name;
			});
			CartStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = CartStore;
