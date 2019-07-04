import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/shoporder/';

export default [
  <Route path="/shop_orders/create" component={Create} exact key="create" />,
  <Route path="/shop_orders/edit/:id" component={Update} exact key="update" />,
  <Route path="/shop_orders/show/:id" component={Show} exact key="show" />,
  <Route path="/shop_orders/" component={List} exact strict key="list" />,
  <Route path="/shop_orders/:page" component={List} exact strict key="page" />
];
