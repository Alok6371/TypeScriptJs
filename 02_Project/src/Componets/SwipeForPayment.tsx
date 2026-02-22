import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SwipePayment: React.FC = () => {
  //   const navigate = useNavigate();

  const x = useMotionValue(0);

  const navigate = useNavigate();

  const handleDrag = () => {
    const swipePosition = x.get();

    if (swipePosition < 250) {
      x.set(0);
    } else {
      setTimeout(() => {
        navigate("/payment");
      }, 2000);
    }
  };

  return (
    <div>
      <div className="w-80 h-16 bg-gray-200 rounded-full relative shadow-lg overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
          Swipe to Book →
        </p>
        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 255 }}
          onDragEnd={handleDrag}
          dragElastic={0}
          dragMomentum={false}
          className="w-14 h-14 rounded-full bg-red-500 absolute top-1 left-1 cursor-pointer text-white flex items-center justify-center font-bold"
        >
          →
        </motion.div>
      </div>
    </div>
  );
};

export default SwipePayment;
