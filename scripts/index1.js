import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from "./App";
import registerServiceWorker from './registerServiceWorker';
/*
var dataSouce = [100, 52, 200, 334, 390, 330,140];
var  dataSouce1 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
*/
class ParentApp extends Component{


  constructor(props) {
    super(props);

    this.state = {  //初始化state
      dataSouce: [100, 52, 200, 334, 390, 330, 140],
      dataSouce1: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }

  }

  tick = () => {

    this.setState({
      dataSouce: [500, 512, 220, 134, 90, 130, 240]
    })

  }
  componentDidMount(){
    console.log("3....componentDidMount");
    this.tick()

  }




  render(){
    /*   console.log(this.state.dataSouce);*/
    return(
      <App data={this.state.dataSouce} data1={this.state.dataSouce1}>
      </App>


    )


  }

}




ReactDOM.render(

  <ParentApp/>,
  document.getElementById('root')

)





registerServiceWorker();
export default ParentApp;