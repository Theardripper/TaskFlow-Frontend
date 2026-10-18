function TaskSummary({ total, completed }) {
    const pending = total - completed;

    return (
        <section>
            <div>
                <h2>Minhas tarefas</h2>
                <p>Organize seu dia, uma tarefa por vez.</p>
            </div>

            <div className="summary-status">


            </div>
        </section>
    );
}

export default TaskSummary;