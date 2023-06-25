import "./global.css";
import { InputTask } from "./components/Input/InputTask";
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

function App() {
  return (
    <>
      <Header />
      <div>
        <InputTask
          type="text"
          value=""
          onChange={() => {
            console.log("mudou");
          }}
        />
        <Button />
        <Task />
      </div>
    </>
  );
}

export default App;
