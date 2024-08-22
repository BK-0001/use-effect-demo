import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    // get the data from api
    const getItem = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      setItem(data[0].title);
    };

    getItem();
  }, [value]);

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
