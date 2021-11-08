import "./App.css";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { DomRef } from "./components/refs/DomRef";
import { MutableRef } from "./components/refs/MutableRef";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
