import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { store } from './redux/reducer';
import { FormSimplys } from './FormSimply';



function App () {
  return (
    <Provider store={store}>
        <Router>
          <Route path="/" exact component={FormSimplys} />
        </Router>     
    </Provider>
  )
};


export default App;
