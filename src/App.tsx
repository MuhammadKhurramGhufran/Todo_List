import Todolist from "./components/Todo";
import "./App.css";

export default function APP() {
    return (
        <div className="List">
            <h1>My Todo List</h1>
            <Todolist /> 
        </div>
    );
}