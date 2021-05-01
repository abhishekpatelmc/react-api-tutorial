import { useEffect, useState } from "react";
import "./App.css";
import { ChildComponent } from "./ChildComponent";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);

  return (
    <div className="App">
      <ChildComponent val={data} />
    </div>
  );
}

export default App;
