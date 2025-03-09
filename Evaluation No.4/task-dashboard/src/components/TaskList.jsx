import { TaskListStyled } from "../Styles";

const TaskList = ({tasks, setTasks, setEditingTask}) => {
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <TaskListStyled>
            {tasks.length === 0 ? <p>No Tasks Available. Add One!</p> : null}
            {tasks.map((task)=>(
                <>
                    <div key={task.id} className="task">
                       <p>{task.text}</p>
                   </div>
                   <button onClick={()=> setEditingTask(task)}>Edit</button>
                   <button onClick={()=>handleDelete(task)}>Delete</button>
                </>
            ))}
        </TaskListStyled>
    )
};

export default TaskList;