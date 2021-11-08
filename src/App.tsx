import "./App.css";
import { Heading } from "./components/Heading";
import { Status } from "./components/STatus";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Place Holder Text</Heading>
    </div>
  );
}

export default App;
