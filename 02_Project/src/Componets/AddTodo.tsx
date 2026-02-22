import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [values, setValues] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTodo("");
    if (todo)
      setValues((prev: string[]) => {
        return [...prev, todo];
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="p-3 border-2 bg-blue-200  font-semibold text-xl border-red-500 text-gray-900 rounded-lg w-[30vw] active:border-none"
        />
        <button
          type="submit"
          className="bg-gray-600 p-3 w-[5vw]  text-white rounded-lg ml-3"
        >
          {" "}
          Add
        </button>
      </form>

      <div>
        {values.map((value) => (
          <div className=" w-[30vw] p-3 text-center bg-slate-400  min-h-[5vw] mt-4 rounded-lg">
            <h1>{value}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
