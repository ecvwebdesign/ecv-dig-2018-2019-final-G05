import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/orderitem/';

export default [
  <Route path="/order_items/create" component={Create} exact key="create" />,
  <Route path="/order_items/edit/:id" component={Update} exact key="update" />,
  <Route path="/order_items/show/:id" component={Show} exact key="show" />,
  <Route path="/order_items/" component={List} exact strict key="list" />,
  <Route path="/order_items/:page" component={List} exact strict key="page" />
];
