import assign from 'object-assign';
import Constants from '../constants/constants';
import { Dispatcher } from 'flux';

const { PayloadSources } = Constants;

export default assign(new Dispatcher(), {
  handleServerAction (action) {
    const payload = {
      source: PayloadSources.SERVER_ACTION,
      action
    };
    this.dispatch(payload);
  },

  handleViewAction (action) {
    const payload = {
      source: PayloadSources.VIEW_ACTION,
      action
    };
    this.dispatch(payload);
  }
});

