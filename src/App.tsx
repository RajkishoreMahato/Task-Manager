import {useState} from "react";

export default function App(){
  const [input,setInput]=useState("");
  const [tasks,setTasks]=useState([]);

  function addTask(){
    if(input.trim()===""){
      return
    }
    setTasks([...tasks,input]);
    setInput("");
  }

  return(
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Task Manager</h1>
      <div className="flex gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter a task" className="border rounded p-2 flex-1" type="text"/>
        <button className='bg-blue-600 text-white rounded px-4' onClick={addTask}>Add</button>
      </div>
      <ul className="mt-4 space-y-2 ">
        {
          tasks.map((task,index)=>(
            <li  className="border rounded p-2"key={index}>{task}</li>
          ))
        }
      </ul>
    </div>
  )
}