import '../App.css';
import { useState, useEffect } from "react";

export const ToDo = () =>{
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        return () => {
            // {<h1> Task added </h1>}
        }
    });

    const handleChange = (event) =>{
        setNewTask(event.target.value);
    };  

    const addTask = () =>{
        const task = {
            id: todoList.length === 0 ? 1: todoList[todoList.length-1] +1,
            taskName: newTask,
            completed: false
        }
        setTodoList([...todoList, task]);
    };

    const deleteTask = (taskName) =>{
        setTodoList(todoList.filter((task) => task.taskName !== taskName))
    };

    const completeTask = (taskName) =>{
        setTodoList(
            todoList.map((task) =>{
                if(task.taskName === taskName){
                    return{ ...task, completed: true}
                }
                else{
                    return task;
                }
            })
        );
    };
    return(
        <div className='todo'>
            <div className="addTask">
                <input type="text" onChange={handleChange} />
               
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='list'>
                {
                todoList.map((task) =>{
                    return <div style={{textDecoration: task.completed ? "line-through" : "none"}}>
                                <h1>
                                {task.taskName} 
                                </h1>
                                
                                <button onClick={() => completeTask(task.taskName)}> Done </button>
                                <button onClick={() => deleteTask(task.taskName)}> X </button>
                            </div>
                })
                }
            </div>
        </div>
    );
}