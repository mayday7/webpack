import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Mychart from 'MyChart';

ReactDOM.render(

  <Mychart/>,
  document.getElementById('root')

)

registerServiceWorker();