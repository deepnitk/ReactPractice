import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("Deep");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(0);
  const [names, setNames] = useState([]);

  function initialValue() {
    console.log("function called");
    return 0;
  }
  function changeName() {
    return setFlag(!flag);
  }

  function increment() {
    return setSteps((prevState) => prevState + 1);
  }

  function decrement() {
    return setSteps((prevState) => prevState - 1);
  }

  function addNames(e) {
    e.preventDefault();
    setNames([...names, {id: names.length, name}]);
    setName("");
  }

  return (
    <div className="App">
      <h1>Hello, {flag ? name : ""}</h1>
      <button onClick={changeName}>Click!</button>
      <br></br>
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <br></br>
      <form onSubmit={ addNames }>
        <input 
          type="text"
          value={name}
          placeholder="add names"
          onChange={(e) => setName(e.target.value)}
          />
          <button>Submit</button>
      </form>
      <br></br>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
