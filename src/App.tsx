import "./App.css";
import { Greets } from "./components/Greets";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Mahedi",
    last: "Hasan",
  };
  return (
    <div className="App">
      <Greets name="Mahedi Hasan" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
