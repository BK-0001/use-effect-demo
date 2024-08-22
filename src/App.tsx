import { useEffect, useState } from "react";
import "./App.css";

function Item({ title }: { title: string }) {
  const [item, setItem] = useState<HTMLLIElement | null>(null);

  useEffect(() => {
    item?.scrollIntoView({ behavior: "smooth" });
  }, [item]);

  return (
    <li ref={setItem}>
      <p>{title}</p>
    </li>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "title" },
    { id: 2, title: "title" },
    { id: 3, title: "title" },
    { id: 4, title: "title" },
    { id: 5, title: "title" },
    { id: 6, title: "title" }
  ]);

  console.log(items);

  // render first item
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} title={item.title} />
      ))}
    </ul>
  );
}

export default App;

// useEffect(() => {
//   // get the data from api
//   const getItem = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos"
//     );
//     const data = await response.json();

//     setItems(data);
//   };

//   getItem();
// }, []);
