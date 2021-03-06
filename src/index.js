import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Fav from './component/Fav';
import store from './component/redux/bankdata/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch , useHistory} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
            <Route path ="/fav">
               <Fav/>
            </Route>
            <Route path="/">
          <App />
        </Route>
       
        </Switch>
      </Router>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
