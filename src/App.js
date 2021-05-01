import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);

  return (
    <div className="App">
      {data.map((val) => {
        return <li>{val.body}</li>;
      })}
    </div>
  );
}

export default App;
