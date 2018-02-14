import * as React from 'react';
import { render } from 'react-dom';
import createStore from './create-store';
import Application from './application';

import './style/index.scss';

let store = createStore();

render(
  <Application store={store}/>,
  document.getElementById('app')
);