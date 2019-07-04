import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
    ConnectedRouter,
    connectRouter,
    routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './variables.scss';
import './app.scss';
import * as serviceWorker from './serviceWorker';
// Import your reducers and routes here
import Welcome from './Welcome';
import storereducer from './reducers/store/';
import user from './reducers/user/';
import orderitem from './reducers/orderitem/';
import product from './reducers/product/';
import shoporder from './reducers/shoporder/';
import cart from './reducers/cart/cart';

//import routes
import productRoutes from './routes/product';
import shoporderRoutes from './routes/shoporder';
import userRoutes from './routes/user';
import orderitemRoutes from './routes/orderitem';
import storeRoutes from './routes/store';
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import {PersonalizationPage1} from "./pages/PersonalizationPage1";
import {PersonalizationPage2} from "./pages/PersonalizationPage2";
import {PersonalizationPage3} from "./pages/PersonalizationPage3";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import OrderAccountPage from "./pages/OrderAccountPage";
import OrderDeliveryPage from "./pages/OrderDeliveryPage";
import OrderPaymentPage from "./pages/OrderPaymentPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderInformationsPage from "./pages/OrderInformationsPage";
import OrderChooseStore from "./pages/OrderChooseStore";
import {SasProductPage} from "./pages/SasProductPage";

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    storereducer,
    orderitem,
    user,
    shoporder,
    product,
    cart
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
          { productRoutes }
          { storeRoutes }
          { userRoutes }
          { shoporderRoutes }
          { orderitemRoutes }
          <Route path="/personnalisation-univers" component={PersonalizationPage1} strict={true} exact={true}/>
          <Route path="/personnalisation-sports" component={PersonalizationPage2} strict={true} exact={true}/>
          <Route path="/personnalisation-finalisation" component={PersonalizationPage3} strict={true} exact={true}/>
          <Route path="/panier" component={CartPage} strict={true} exact={true}/>
          <Route path="/commande/recapitulatif" component={OrderSummaryPage} strict={true} exact={true}/>
          <Route path="/commande/compte" component={OrderAccountPage} strict={true} exact={true}/>
          <Route path="/commande/informations" component={OrderInformationsPage} strict={true} exact={true}/>
          <Route path="/commande/choix-magasin" component={OrderChooseStore} strict={true} exact={true}/>
          <Route path="/commande/livraison" component={OrderDeliveryPage} strict={true} exact={true}/>
          <Route path="/commande/paiement" component={OrderPaymentPage} strict={true} exact={true}/>
          <Route path="/commande/confirmation" component={OrderConfirmationPage} strict={true} exact={true}/>
          <Route path="/commande/confirmation" component={OrderConfirmationPage} strict={true} exact={true}/>
          <Route path="/produits/football" component={SasProductPage} strict={true} exact={true}/>
          <Route path="/welcome" component={Welcome} strict={true} exact={true}/>
          <Route path="/" component={HomePage} strict={true} exact={true}/>
          <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
