import {Clear} from '@material-ui/icons'
import './todoList.css'
import { useReducer ,useState} from 'react'
import RatingStar from '../RatingStar'
import { ratingContext } from '../Context'
export default function TodoList(props){
  const [rat,setRat]=useState("")
  
    // const [checked,toggle]=useReducer(checked=>!checked)
    const [Checked,setChecked]=useState(false)
  const [disable,setDisable]=useState("disabled")
  function toggle(){
    if(Checked)
    {
      setChecked(!Checked)
      // setDisable("disbaled")
    }
    else
    {
      setChecked(Checked)
      setDisable("not-disabled")
    }
    // alert("hai")
  }
  const handleCheckBox=(u)=>{
    props.checkedBox(u.id)
  }
 return(
      <div>
        <table className="table table-striped" id="table" >
    <thead>
      <tr >
       <th> Select</th>
        <th scope="col">Work</th>
        <th scope="col">Date</th>
        <th scope="col">Rating</th>
        <th></th>
      </tr>
    </thead>
    <tbody >
     {props.todo.map((u,i)=>(
   
      <tr style={u.done?{textDecoration:"line-through"}:null}key={u.id} >
       <td> <input type="checkbox" onChange={()=>handleCheckBox(u)}checked={u.done} ></input>
       {/* {checked?"checked":"not checked"} */}
       </td>
        <td >{u.work}</td>
        <td>{u.date}</td>
        <td>
          <ratingContext.Provider value={{rat,setRat}}>
          <RatingStar/>
          </ratingContext.Provider>
          
          </td>
        <td><Clear onClick={(()=>{props.remove(u.id)})} style={{cursor:"pointer"}}/></td>
      </tr>
    )
    )
  }

    </tbody>
  </table>
      </div>

 )}