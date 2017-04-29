import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateCalendar from './components/DateCalendar'

import '../public/styles/main.scss';


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <DateCalendar/>
      </MuiThemeProvider>
    );
  }
}



ReactDOM.render(<App/>, document.querySelector('#app'));
