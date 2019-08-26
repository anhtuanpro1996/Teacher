
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import LayoutMain from './components/Layout';
import './index.css';
import 'antd/dist/antd.css';
import {I18nextProvider} from 'react-i18next';
import Home from './containers/Home/Home';
import Warehouse from './containers/Warehouse/Warehouse';
import ManageCourse from './containers/ManageCourse/ManageCourse';
import CreateCourses from './containers/ManageCourse/CreateCourses/CreateCourses';
import i18next from 'i18next';
import './i18n';
import {loadAuthors} from './actions/UserActions';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { getChildFolderData } from './actions/thunks/fetchChildFolders';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});
// initialState
const initialState = {};

// Create store
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(loadAuthors());
store.dispatch(getChildFolderData(0));
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
              <Route path = "/manage/createcourses" component={CreateCourses}/>
            </Switch>
          </LayoutMain>
        </div>
      </Router>
    </I18nextProvider>

  </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'));
