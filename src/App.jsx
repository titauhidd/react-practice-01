import "./App.css";
import Todo from "./Components/Todo/Todo";

function App() {
  const Todoo = [
    { task: "Eat", time: "12:30" },
    { task: "Work", time: "02:30" },
    { task: "Sleep", time: "06:30" },
  ];
  return (
    <>
      {/* <Todo task="Lear React" isDone={true}></Todo> */}
      {Todoo.map((todood) => {
        return <Todo todood={todood}></Todo>;
      })}
      {/* <Todo task="Keep Learnning" isDone={false}></Todo>
      <Todo task="Good Job You Finished Learning" isDone={true}></Todo> */}
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
