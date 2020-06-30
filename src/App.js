import React from 'react';
import Main from './component/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider } from 'react-redux';
import {ConfigureStore} from './redux/ConfigureStore'

const store = ConfigureStore();

const App = () =>{

    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Main/>
       </div>
     </BrowserRouter>
     </Provider>
    );
  }
 
export default App;
