import TaskItem from './TaskItem';

function TaskList({ tasks }) {
    return (
        <section className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </section>
    );
}

export default TaskList;