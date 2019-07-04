import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/store/';

export default [
  <Route path="/stores/create" component={Create} exact key="create" />,
  <Route path="/stores/edit/:id" component={Update} exact key="update" />,
  <Route path="/stores/show/:id" component={Show} exact key="show" />,
  <Route path="/stores/" component={List} exact strict key="list" />,
  <Route path="/stores/:page" component={List} exact strict key="page" />
];
