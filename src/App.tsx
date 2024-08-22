import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState();
  const [value, setValue] = useState("");
  // get the data from api
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((result) => {
      console.log("running");

      setItem(result[0].title);
    });

  // render first item
  return (
    <>
      <div>{item}</div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default App;
