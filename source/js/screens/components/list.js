import React, { Component } from 'react';

import ListStore from '../../stores/list';
import ViewActionCreators from '../../actions/ViewActionCreators';

import Item from './item';

export class List extends Component {

  constructor (props) {
    super(props);

    this.state = ListStore.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount () {
    ListStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadList();
  }

  componentWillUnmount () {
    ListStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange () {
    this.setState(ListStore.getState());
  }

  render () {
    const items = this.state.items.map((item, index) => (
      <Item key={ index } item={ item } />
    ));

    return (
      <ul>
        { items }
      </ul>
    );
  }
}

