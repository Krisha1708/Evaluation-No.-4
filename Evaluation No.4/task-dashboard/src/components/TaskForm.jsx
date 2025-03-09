import { useEffect, useRef, useState } from "react";
import { TaskFormStyled } from "../Styles";


const TaskForm = ({tasks, setTasks, editingTask, SetEditingTask}) => {
    const [taskText, setTaskText] = useState("");

    useEffect(()=>{
        if(editingTask){
            setTaskText(editingTask.task);
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!taskText.trim()) return;

        if(editingTask){
            satTasks(tasks.map(task=>(task.id === editingTask.id ? {...task, text:taskText}: task)));
            SetEditingTask(null);
        } else{
            const newTask = {id:Date.now(), task:taskText};
            setTasks([...tasks, newTask]);
            setTaskText("")
        };

        return (
            <TaskFormStyled>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Enter a task..." value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
                    <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
                </form>
            </TaskFormStyled>
        )
    }
};

export default TaskForm;