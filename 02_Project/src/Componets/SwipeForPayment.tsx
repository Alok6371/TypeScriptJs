import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SwipePayment: React.FC = () => {

  const navigate = useNavigate();

  const x = useMotionValue(0);

  const handleDragEnd = () => {

    if (x.get() > 220) {

      alert("Booking Confirmed ✅");

      navigate("/payment");

    }
  };

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="w-80 h-16 bg-gray-200 rounded-full relative shadow-lg overflow-hidden">

        <p className="absolute inset-0 flex items-center justify-center font-semibold">
          Swipe To Confirm →
        </p>

        <motion.div

          drag="x"

          dragConstraints={{ left: 0, right: 240 }}

          style={{ x }}

          onDragEnd={handleDragEnd}

          className="w-14 h-14 bg-green-500 rounded-full absolute top-1 left-1 cursor-pointer flex items-center justify-center text-white"

        >
          →
        </motion.div>

      </div>

    </div>

  );
};

export default SwipePayment;