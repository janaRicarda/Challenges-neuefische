import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { useState } from "react";
import { getD6Roll } from "./utils";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // const [rolls, setRolls] = useState([]);
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  const currentRollValue = rolls[0]?.value;

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
