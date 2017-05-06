import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateCalendar from './components/DateCalendar';

import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// import '../public/styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <DateCalendar store={store}/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));

export default store;