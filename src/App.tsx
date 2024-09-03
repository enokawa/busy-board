import "./App.css";
import { Checkboxes } from "./components";

const columns = 8;
const checkboxes = columns * 100;

function App() {
  return (
    <>
      <h1 className="text-3xl">BUSY BOARD</h1>
      <div className="checkboxes mt-6">
        <Checkboxes columns={columns} checkboxes={checkboxes} />
      </div>
    </>
  );
}

export default App;
