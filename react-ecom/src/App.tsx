import Sidebr from "./componets/Sidebr";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MainContent from "./componets/MainContent";
const App = () => {
  return (
    <Router>
      <div className="text-gray-600 flex">
        <Sidebr />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
