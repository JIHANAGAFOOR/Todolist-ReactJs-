import './todoListAdd.css'
import {ArrowForward} from '@material-ui/icons';
import {Component} from 'react'
export default class TodolistAdd extends Component{
  constructor(props){
    super(props)
    this.state={work:"",date:""}
  }
 todo=()=>{
    this.props.Add(this.state)
    this.setState({work:"" ,date:""})
  }
  render(){
    return(
      <div>
        <input id="input1"type="text" name="work"onChange={(e)=>this.setState({work:e.target.value})} value={this.state.work} placeholder='Enter the works to do'></input>
        <span><input id="input2" type="date"onChange={(e)=>this.setState({date:e.target.value})} value={this.state.date}name="date"/></span>
        <span id="input3"><ArrowForward id="arrow" onClick={this.todo}/></span>
      </div>
    )
  }
}