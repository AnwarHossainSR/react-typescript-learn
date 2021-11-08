import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => console.log("event type", event, id)}
      />
      <Input value="dsf" handleChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default App;
