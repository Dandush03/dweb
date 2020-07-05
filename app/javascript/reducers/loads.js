import * as types from '../actions/actionsType';

let newState = null;

export default (state = '', action) => {
  switch (action.type) {
    case types.ADD_LOADING_ITEM:
      return { ...state, ...action.payload };
    case types.ITEM_LOADED:
      newState = {
        ...state, ...action.payload,
      };
      return newState;
    default:
      return state;
  }
};
