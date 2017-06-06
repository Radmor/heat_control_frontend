import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateCalendarContainer from './containers/DateCalendarContainer';
import WeekCalendarContainer from './containers/WeekCalendarContainer';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';



import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { DATESCREEN, WEEKSCREEN } from './constants/ConfigConstants';

import { changeScreen } from './actions/ConfigActions';

// import '../public/styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);
window.store = store;


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      date:true
    }
  }



  render() {

    


    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Paper>
            <AppBar
              title='Heat control'
            >

            </AppBar>
            <Toolbar>
              <ToolbarGroup>
                <RaisedButton label="Date screen" primary={ this.state.date } default={ !this.state.date } onTouchTap={ () => { this.setState({
      date:true
    }) } }  />
                <RaisedButton label="Week screen" primary={ !this.state.date } default={ this.state.date } onTouchTap={ () => {  this.setState({
      date:false
    }) } } />
              </ToolbarGroup>
            </Toolbar>
             { (this.state.date) ? <DateCalendarContainer/> : <WeekCalendarContainer/> }
          </Paper>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));

export default store;