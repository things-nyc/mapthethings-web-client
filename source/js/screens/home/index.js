import React from 'react';
import classNames from 'classnames';

import { List } from '../components/list';

const divClasses = classNames('container-home');

export const Home = () => (
  <div className={ divClasses }>
    <h1>Packing List</h1>
    <List />
  </div>
);

