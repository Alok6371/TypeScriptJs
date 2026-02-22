import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SwipePayment: React.FC = () => {

  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);

  const circleWidth = 56;

  const startDrag = () => {
    setDragging(true);
  };

  const stopDrag = () => {

    setDragging(false);

    const containerWidth =
      containerRef.current?.offsetWidth || 0;

    const maxSwipe = containerWidth - circleWidth - 8;

    if (position >= maxSwipe - 10) {

      // ✅ Alert message
      alert("Booking Confirmed ✅");

      // Redirect
      navigate("/payment");

    } else {

      setPosition(0);

    }
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {

    if (!dragging) return;

    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    let newX = e.clientX - rect.left - 28;

    const maxSwipe =
      rect.width - circleWidth - 8;

    if (newX < 0) newX = 0;
    if (newX > maxSwipe) newX = maxSwipe;

    setPosition(newX);
  };

  return (

    <div
      className="flex justify-center items-center h-screen"
      onMouseMove={handleMove}
      onMouseUp={stopDrag}
    >

      <div
        ref={containerRef}
        className="w-80 h-16 bg-red-500 rounded-full relative shadow-lg overflow-hidden"
      >

        <p className="absolute inset-0 flex items-center justify-center font-semibold text-white">
          Swipe To Confirm Booking →
        </p>

        <div
          onMouseDown={startDrag}
          className="w-14 h-14 bg-white rounded-full absolute top-1 cursor-pointer flex items-center justify-center text-black  transition-all duration-200"
          style={{ left: position }}
        >
          →
        </div>

      </div>

    </div>

  );
};

export default SwipePayment;