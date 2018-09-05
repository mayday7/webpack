import React,{Component} from 'react';


class Lists extends Component{

  constructor(props){
    super(props);

    this.handleFinished = this.handleFinished.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFinished(){

    var status = this.props.item.status;

    status = (status == 0 ? 1:0)

    var obj = {

      id:this.props.item.id,
      name:this.props.item.name,
      status:status

    }

    this.props.finishedChange(obj)


  }

  checkAll(){
    var status = this.props.item.status;



  }

  handleDelete(){
    this.props.totalChange(this.props.item)
  }


  render(){
    const item = this.props.item;
    const unfinished = {

      color:"#000"
    };

    const finished = {
      backgroundColor:"#ace",
      color:"red",
      textDecoration: 'line-through'
    }

    var itemStytle = item.status === 0 ? unfinished:finished;

    return(

      <li key={item.id} style={itemStytle}>
        <span className="check-btn" onClick={this.handleFinished} id={item.id}
              style={{backgroundColor: item.status === 0 ? '#fff' : 'red'}}></span>
        <span>{item.name}</span>
        <span className="delete-btn" onClick={this.handleDelete}>删除</span>

      </li>



    )
  }

}


export default Lists;