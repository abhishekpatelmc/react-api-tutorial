import "./App.css";

function App() {
  const data = (state) => {
    this.state = {
      items: [],
      isLoading: false,
    };
  };

  const didMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoading: true,
          items: json,
        });
      });
  };

  return <div className="App">Hello</div>;
}

export default App;
