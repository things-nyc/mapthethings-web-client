import xhr from '../lib/xhr';
import ServerActionCreators from '../actions/ServerActionCreators';

export default {
  loadList () {
    xhr.getJSON('/data/list.json', (err, res) => {
      ServerActionCreators.loadedList(res);
    });
  }
};

