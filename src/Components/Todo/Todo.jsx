const Todo = ({ todood }) => {
  // console.log(task, isDone);
  console.log(todood);
  const { task, time } = todood;

  // if (isDone) {
  //   return <li>Finished: {task}</li>;
  // } else {
  //   return <li>Work On: {task}</li>;
  // }

  return (
    //using ternary operator
    // <li>
    //   {isDone ? "Finishd" : "Please"}: {task}
    // </li>
    <div>
      <p>Task: {task}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default Todo;
