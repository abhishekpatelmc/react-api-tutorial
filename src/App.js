import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    res.json().then((res) => setData(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
