import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <Header
            titulo="Noticias"
          />
        </p>
      </div>
    );
  }
}

export default App;
