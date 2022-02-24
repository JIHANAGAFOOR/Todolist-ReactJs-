import logo from './logo.svg';
import './App.css';
import TodolistAdd from './components/todoListAdd/todoListAdd';
import TodoList from './components/todolist/todoList';
import {useState , useEffect , useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import { ratingContext } from './components/Context';
function App() {
  const {rat}=useContext(ratingContext)
  const [todo1,setTodo1]=useState([])
  // const list=(e)=>{
  //   console.log(e)
  // }
  console.log(uuidv4())
  const todoList=(e)=>{
    console.log("data is"+e);
    setTodo1([...todo1,{id:uuidv4(),...e}])

  }
  const deleteContact=(e)=>{
    // console.log("main list is"+todo1)
    console.log("it is"+e)
    const filterdata=todo1.filter((todo1)=>{
     
      return todo1.id!=e
    })
    setTodo1(filterdata)
  }
  const Chec=(e)=>{
    console.log("checked id is "+e)
    const newTodoList=todo1.map((todo1)=>{
      if(todo1.id===e)
      return{...todo1,done:!todo1.done}
      return todo1
      
    })
   setTodo1(newTodoList)
  }
  useEffect(()=>{
    const localdata=JSON.parse(localStorage.getItem("todolist"))
    console.log("dataaa:"+localdata);
    setTodo1(localdata)
  },[])
  useEffect(()=>{
    localStorage.setItem("todolist",JSON.stringify(todo1))
  },[todo1])
  return (
    <div className='containerFluid'>
      <div className='row'>
        <div className="col-sm-2"></div>
        <div className="col-sm-8"id="bg1">
          <h2 id="text2">To Do List</h2>
          jhsa
          <p>{rat}</p>
          <TodolistAdd Add={todoList}/>
          <br/><br/>
          <TodoList todo={todo1} remove={deleteContact} checkedBox={Chec}/>
        </div>
        <div className="col-sm-2"></div>

      </div>

    </div>
  );
}

export default App;
