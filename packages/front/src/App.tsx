import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { store } from './redux/reducer';
import FormPage from './FormPage';
import MsgComp  from './MsgComp';

function App () {
  return (
    <Provider store={store}>
       <MsgComp/>
        <Router>
          <Route path="/" exact component={FormPage} />
        </Router>     
    </Provider>
  )
};


export default App;
