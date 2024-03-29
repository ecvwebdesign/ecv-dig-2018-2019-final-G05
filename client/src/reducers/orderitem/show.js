import { combineReducers } from 'redux';

export function error(state = null, action) {
  switch (action.type) {
    case 'ORDERITEM_SHOW_ERROR':
      return action.error;

    case 'ORDERITEM_SHOW_MERCURE_DELETED':
      return `${action.retrieved['@id']} has been deleted by another user.`;

    case 'ORDERITEM_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case 'ORDERITEM_SHOW_LOADING':
      return action.loading;

    case 'ORDERITEM_SHOW_RESET':
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case 'ORDERITEM_SHOW_SUCCESS':
    case 'ORDERITEM_SHOW_MERCURE_MESSAGE':
      return action.retrieved;

    case 'ORDERITEM_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case 'ORDERITEM_SHOW_MERCURE_OPEN':
      return action.eventSource;

    case 'ORDERITEM_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
