import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Video from "./Components/Video"
import Sidebar from "./Components/Sidebar"
import Store from './store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider Store={Store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    )
  }
}

export default App;
