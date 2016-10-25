import Constants from '../constants/constants';
import AppDispatcher from '../dispatcher/dispatcher';

const { ActionTypes } = Constants;

export default {
  loadedList: (items) => {
    AppDispatcher.handleServerAction({
      type: ActionTypes.LIST_LOADED,
      items
    });
  }
};
