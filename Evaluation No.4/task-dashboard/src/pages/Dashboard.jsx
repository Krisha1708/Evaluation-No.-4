import { useState, useEffect  } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import { DashboardStyled } from "../Styles";

const Dashboard = ()=>{
    const [tasks, setTasks] = useState(()=>{
        JSON.parse(localStorage.getItem("tasks")) || [];
    });

    const [editingTask, setEditingTask] = useState(null);

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <Navbar />
            <DashboardStyled>
                <h2>Task Dashboard</h2>
                <TaskForm tasks={tasks} setTasks={setTasks} editingTask={editingTask}
                setEditingTask={setEditingTask}/>
                <TaskList tasks={tasks} setTasks={setTasks} setEditingTask={setEditingTask} />
            </DashboardStyled>
        </>
    );
};

export default Dashboard;