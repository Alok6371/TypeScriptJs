import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SwipePayment: React.FC = () => {
  const [userLogin, setUserLogin] = useState(false);
  const navigate = useNavigate();

  const x = useMotionValue(0);

  const [completed, setCompleted] = useState(false);

  const handleDragEnd = () => {
    const position = x.get();

    if (position > 240 && userLogin) {
      setCompleted(true);

      navigate("/payment");
    } else {
      x.set(0);
      alert("Login First");
      setCompleted(false);
    }
  };
  const changeuser = () => {
    setUserLogin(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        onClick={changeuser}
        className="p-10 m-20 bg-blue-500 text-white cursor-pointer "
      >
        Click Me
      </div>

      <div className="w-80 h-16 bg-gray-200 rounded-full relative shadow-lg overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
          Swipe to Book →
        </p>

        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 255 }}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          className={`w-14 h-14 rounded-full absolute top-1 left-1 cursor-pointer text-white flex items-center justify-center font-bold ${
            completed ? "bg-blue-400" : "bg-red-600"
          }`}
        >
          →
        </motion.div>
      </div>
    </div>
  );
};

export default SwipePayment;
