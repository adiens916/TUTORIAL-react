import { useEffect, useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([])
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoList((currentList) => [toDo, ...currentList]);
    setToDo("");
  }
  useEffect(() => {
    console.log(toDoList);
  }, [toDoList])

  return (
    <div>
      <h1>My To Do List ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo}
          onChange={onChange}
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDoList.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default ToDoList;
