// import AddTodo from "./Componets/AddTodo";
import { Routes, Route } from "react-router-dom";
import SwipePayment from "./Componets/SwipeForPayment";
import AddTodo from "./Componets/AddTodo";

const App = () => {
  return (
    <main className="flex  flex-col  justify-start items-center h-screen w-screen bg-gray-500">
      <h1 className="text-blue-500 uppercase text-3xl m-3">
        TODO React + TypeScript
      </h1>

      <Routes>
        <Route path="/" element={<SwipePayment />} />
        <Route path="/payment" element={<AddTodo />} />
      </Routes>
    </main>
  );
};

export default App;
