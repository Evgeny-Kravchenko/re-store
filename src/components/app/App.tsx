import React, { FC } from 'react';

import './App.scss';

import ErrorBoundry from '../error-boundry';

const App: FC = () => (
  <ErrorBoundry>
    <h1>Hello World</h1>
  </ErrorBoundry>
);

export default App;
