import { Routes, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
