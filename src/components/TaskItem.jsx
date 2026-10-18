function TaskItem({ task}) {
    return (
        <article className="task-item">
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>


            <span
            className={task.completed
                ? "task-status completed"
                : "task-status pending"
            }
            >
            {task.completed ? "Concluída" : "Pendente"}
            </span>
        </article>
    )
}

export default TaskItem;