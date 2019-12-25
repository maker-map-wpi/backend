import React from "react";
import {render} from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (<div >
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </div>)
};
render(<App/>, document.getElementById("app"));
