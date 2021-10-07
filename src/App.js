import Questions from "./components/questions";
import data from "./questions";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Questions questions={data}/>
    </div>
  );
}

export default App;
