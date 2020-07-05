import * as ActionTypes from './actionsType';

function addItem(item) {
  return {
    type: ActionTypes.ADD_LOADING_ITEM,
    payload: item,
  };
}

function itemLoaded(item) {
  return {
    type: ActionTypes.ITEM_LOADED,
    payload: item,
  };
}

export { addItem, itemLoaded };
