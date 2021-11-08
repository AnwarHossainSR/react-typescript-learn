import "./App.css";
import { Greets } from "./components/Greets";

function App() {
  return (
    <div className="App">
      <Greets name="Mahedi Hasan" messageCount={20} isLoggedIn={false} />
    </div>
  );
}

export default App;
