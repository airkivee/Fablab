import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

const RoleProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default RoleProvider;