
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import TodoApp from './containers/TodoApp';
import rootReducer from './reducers/rootReducer';
import LayoutMain from './components/Layout';
import './index.css';
import 'antd/dist/antd.css';
import {I18nextProvider} from 'react-i18next';
import Home from './containers/Home/Home';
import Warehouse from './containers/Warehouse/Warehouse';
import ManageCourse from './containers/ManageCourse/ManageCourse';
import i18next from 'i18next';
import './i18n';
// Dev tool
import DevTools from './containers/DevTools';
import TodoInput from './components/TodoInput';
import {loadAuthors} from './actions/UserActions';
import TodoList from './components/TodoList';
import ShowUser from './containers/ShowUser';
import { persistState } from 'redux-devtools';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {fetchFolders} from './actions/FolderActions';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

// initialState
const initialState = {};

// Create store
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(loadAuthors());
store.dispatch(fetchFolders());
const appRoot = (
  <Provider store={store}>
    {/* {console.log('aba', store)} */}
    <I18nextProvider i18n={i18next}>
      <Router>
        <div className="App">
          <LayoutMain title= "EDumall">
            <Switch>
              <Route path = "/" exact component={Home}/>
              <Route path = "/warehouse" component={Warehouse}/>
              <Route path = "/manage/course" component={ManageCourse}/>
            </Switch>
          </LayoutMain>
        </div>
      </Router>
    </I18nextProvider>

  </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'));
