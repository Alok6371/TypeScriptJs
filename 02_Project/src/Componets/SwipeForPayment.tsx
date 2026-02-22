import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SwipePayment: React.FC = () => {

  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);

  const circleWidth = 56;

  // Start Drag
  const startDrag = () => {
    setDragging(true);
  };

  // Stop Drag
  const stopDrag = () => {

    setDragging(false);

    const containerWidth =
      containerRef.current?.offsetWidth || 0;

    const maxSwipe =
      containerWidth - circleWidth - 8;

    if (position >= maxSwipe - 10) {

      alert("Booking Confirmed ✅");

      navigate("/payment");

    } else {

      setPosition(0);

    }
  };

  // Mouse Move
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    if (!dragging) return;

    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    let newX =
      e.clientX - rect.left - 28;

    const maxSwipe =
      rect.width - circleWidth - 8;

    if (newX < 0) newX = 0;
    if (newX > maxSwipe) newX = maxSwipe;

    setPosition(newX);
  };

  // Touch Move (Mobile)
  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {

    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    let newX =
      e.touches[0].clientX - rect.left - 28;

    const maxSwipe =
      rect.width - circleWidth - 8;

    if (newX < 0) newX = 0;
    if (newX > maxSwipe) newX = maxSwipe;

    setPosition(newX);
  };

  return (

    <div
      className="flex justify-center items-center h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrag}
      onTouchEnd={stopDrag}
    >

      <div
        ref={containerRef}
        className="w-80 h-16 bg-gray-200 rounded-full relative shadow-lg"
      >

        <p className="absolute inset-0 flex items-center justify-center font-semibold">
          Swipe To Confirm →
        </p>

        <div
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          onTouchMove={handleTouchMove}
          className="w-14 h-14 bg-green-500 rounded-full absolute top-1 cursor-pointer flex items-center justify-center text-white transition-all duration-200"
          style={{ left: position }}
        >
          →
        </div>

      </div>

    </div>

  );
};

export default SwipePayment;