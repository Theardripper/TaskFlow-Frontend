import Header from "./components/Header";
import TaskSummary from "./components/TaskSummary";
import TaskList from "./components/TaskList";
import "./App.css";

const tasks = [
  {
    id: 1,
    title: "Estudar React",
    description: "Aprender components e props.",
    completed: false,
  },
  {
    id: 2,
    title: "Fazer exercícios",
    description: "Resolver exercícios de programação.",
    completed: true,
  },
  {
    id: 3,
    title: "Estudar JavaScript",
    description: "Praticar arrays e funções.",
    completed: false,
  }
];

function App() {
  const completed = tasks.filter(
    (task) => task.completed
  ).length;


  return (
    <main className="app">
      <Header />

      <div className="content">
        <TaskSummary
          total={tasks.length}
          completed={completed}
        />
        
        <TaskList tasks={tasks} />
      </div>  
  
    </main>
  );
}

export default App;