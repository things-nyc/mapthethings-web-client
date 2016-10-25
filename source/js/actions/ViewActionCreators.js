import AppDispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';
import APIUtils from '../utils/APIUtils';

const ActionTypes = Constants.ActionTypes;

export default {
  loadList () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_LIST
    });
    APIUtils.loadList();
  },

  deleteItem (item) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.ITEM_DELETED
    });
    APIUtils.deleteItem(item);
  }
};
