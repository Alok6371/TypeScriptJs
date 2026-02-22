import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SwipePayment: React.FC = () => {

  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);

  const circleWidth = 56;

  // Start drag
  const startDrag = () => {
    setDragging(true);
  };

  // End drag
  const endDrag = () => {

    setDragging(false);

    const containerWidth =
      containerRef.current?.offsetWidth || 0;

    const maxSwipe =
      containerWidth - circleWidth;

    if (position >= maxSwipe - 5) {

      alert("Booking Confirmed ✅");

      navigate("/payment");

    } else {

      setPosition(0);

    }
  };

  // Move
  const move = (clientX: number) => {

    if (!dragging) return;

    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    let newX =
      clientX - rect.left - 28;

    const maxSwipe =
      rect.width - circleWidth;

    if (newX < 0) newX = 0;
    if (newX > maxSwipe) newX = maxSwipe;

    setPosition(newX);
  };

  return (

    <div
      className="flex justify-center items-center h-screen"
      onMouseMove={(e) => move(e.clientX)}
      onMouseUp={endDrag}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >

      <div
        ref={containerRef}
        className="w-80 h-16 bg-gray-200 rounded-full relative shadow-lg"
      >

        <p className="absolute inset-0 flex items-center justify-center font-bold">
          Swipe To Confirm →
        </p>

        <div
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          style={{
            left: position,
            touchAction: "none"
          }}
          className="w-14 h-14 bg-green-500 rounded-full absolute top-1 cursor-pointer flex items-center justify-center text-white transition-all duration-200"
        >
          →
        </div>

      </div>

    </div>

  );
};

export default SwipePayment;