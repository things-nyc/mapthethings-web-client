import keyMirror from 'keyMirror';

export default {
  ActionTypes: keyMirror({
    LIST_LOADED: null,
    LOAD_LIST: null,
    ITEM_DELETED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
