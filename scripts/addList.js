import React,{Component} from 'react';

class AddList extends Component{

  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(){
    var len = this.props.nums;

    var newid = len > 0 ? len : 0;
    var value = this.refs.myText.value;

    if(value != ""){

      var obj = {
        id:newid,
        name:value,
        status:0
      }

      this.refs.myText.value = "";

      this.props.addNewTask(obj)



    }

  }

  render(){
    return(
      <div>

        <div className="dialog">
          <h3>Task</h3>
          <input type="text" ref="myText" placeholder="添加新任务"/>
        </div>
        <div>
          <input type="button" value="add task" onClick={this.handleClick}/>
        </div>
      </div>

    )
  }

}

export  default AddList;