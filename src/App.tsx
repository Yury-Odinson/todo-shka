import { Routes, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import { Todo } from "./components/Todo";
import { TaskContext } from "./tools/store";
import { useEffect, useState } from "react";
import { Task } from "./tools/types";

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks") || "[]")
    setTasks(data)
  }, [])

  // console.log("update app.tsx")

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>

      <div className="wrapper">
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
