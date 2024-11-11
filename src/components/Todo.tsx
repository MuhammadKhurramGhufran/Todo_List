import { useState } from "react";

interface Todo {
    id: number;
    task: string;

}

const Todolist = () =>{
    const [task,setTask] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([]); 

    const addtask = () => {
        if(task.trim () ==="")return;
        const newtask = {id: Date.now(), task }; 
        setTodos([...todos,newtask]);
        setTask("");

    };
     const deteletask =(id: number) => {
        setTodos(todos.filter(Todo => Todo.id !==id))

     };

     return(
        <div className="Todo-Container">
            <div className="Input-Session">
                <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a Task"
                />
                <button onClick={addtask}
                disabled={!task}
                className={task ? "active" : ""}>
                Add Task
                </button>
             </div>
             
             <ul>
                {todos.map((todo) => (
                    <li key ={todo.id}>
                        {todo.task}
                        <button onClick={() => deteletask(todo.id)}>Delete</button>
                    </li>
                ))}
             </ul>
        </div>
     );
     

};

export default Todolist ;  