import "./App.css";
import { Greets } from "./components/Greets";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/STatus";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Place Holder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Di Caprio</Heading>
      </Oscar>
      <Greets name="Mahedi Hasan" isLoggedIn={true} />
    </div>
  );
}

export default App;
