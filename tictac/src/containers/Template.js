import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

class Tamplate extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTac</h1>
            <RaisedButton
              label={'Test Button'}
              primary={true}
              onTouchTap={()=>{console.log('working a szart')}}
            />
          </header> 
          <main>
            {this.props.children}
          </main>     
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Tamplate;
