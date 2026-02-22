// import AddTodo from "./Componets/AddTodo";
import SwipePayment from "./Componets/SwipeForPayment";

const App = () => {
  return (
    <main className="flex  flex-col  justify-start items-center h-screen w-screen bg-gray-500">
      <h1 className="text-blue-500 uppercase text-3xl m-3">
        TODO React + TypeScript
      </h1>
      {/* <AddTodo /> */}
      <SwipePayment />
    </main>
  );
};

export default App;
