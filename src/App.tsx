import "./App.css";
import { Greets } from "./components/Greets";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Mahedi",
    last: "Hasan",
  };
  const nameList = [
    {
      first: "Jahid",
      last: "Mahmud",
    },
    {
      first: "SHakil",
      last: "Ahmed",
    },
  ];
  return (
    <div className="App">
      <Greets name="Mahedi Hasan" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
