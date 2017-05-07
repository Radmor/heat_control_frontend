import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateCalendarContainer from './containers/DateCalendarContainer';

import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// import '../public/styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);
window.store = store;


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <DateCalendarContainer/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));

export default store;