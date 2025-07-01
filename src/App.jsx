import "./App.css";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <>
      <Todo task='Lear React' isDone={true}></Todo>
      <Todo task='Keep Learnning' isDone={false}></Todo>
      <Todo task='Good Job You Finished Learning' isDone={true}></Todo>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
