import React, { Component } from 'react';

import './main.css';
import ReactDOM from "react-dom";
import AddList from "./addList";
import Lists from "./Lists";

class Todolist extends Component{


  constructor(props){
    super(props);

    this.state = {
      list: [
        {
          id:0,
          name:"吃饭",
          status:0
        },{
          id:1,
          name:"学习",
          status:0
        },{
          id:2,
          name:"跑步",
          status:0
        }],
      finished: 0
    }
  }


  addTask(newItem){
    var allTask = this.state.list;
    allTask.push(newItem);
    this.setState({
      list:allTask
    })

  }

  updateFinished(toDoItem){

    var sum = 0;

    this.state.list.forEach((item) =>{
      if(item.id === toDoItem.id ){
        item.status = toDoItem.status
      };

      if(item.status === 1){
        sum++
      }

    });

    this.setState({
      finished:sum
    });

  };

  updateTotal(toDoItem){
    var obj = [],sum = 0;

    this.state.list.forEach((item) =>{
      if(item.id != toDoItem.id){
        obj.push(item)
        if(item.status === 1){
          sum++;
        }

      }


    });

    this.setState({
      list:obj,
      finished:sum
    })



  };



  render(){
    return(
      <div className="container">
        <h1>TodoList</h1>
        <h2>任务列表</h2>
        <AddList addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>

        <ul>
          {this.state.list.map((item,index) =>
            <Lists item={item} key={index}
            finishedChange={this.updateFinished.bind(this)}
                   totalChange={this.updateTotal.bind(this)}/>
          )}

          <li>已完成： {this.state.finished}&nbsp;&nbsp;未完成： {this.state.list.length-this.state.finished}  &nbsp;&nbsp;总数 ：{this.state.list.length} </li>
        </ul>

      </div>

    )
  }

}




export default Todolist;


ReactDOM.render(

  <Todolist/>,
  document.getElementById('root')

)

