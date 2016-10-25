import React from 'react';
import { render } from 'react-dom';

import '../css/main.scss';

import { Wrapper } from './screens/components/wrapper';
import { Home } from './screens/home/index';

render(
  <Wrapper>
    <Home />
  </Wrapper>,
  document.getElementById('main-container')
);

