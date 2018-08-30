import React, {Component} from 'react';

class Tamplate extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TicTac</h1>
        </header> 
        <main>
          {this.props.children}
        </main>     
      </div>
    );
  }
};

export default Tamplate;
