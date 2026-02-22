import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SwipePayment: React.FC = () => {
  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const startPosition = useRef(0);

  const circleWidth = 56;

  // Start Drag
  const startDrag = (clientX: number) => {
    setDragging(true);

    startX.current = clientX;
    startPosition.current = position;
  };

  // End Drag
  const endDrag = () => {
    setDragging(false);

    const containerWidth = containerRef.current?.offsetWidth || 0;

    const maxSwipe = containerWidth - circleWidth;

    if (position >= maxSwipe - 5) {
      navigate("/payment");
    } else {
      setPosition(0);
    }
  };

  // Move
  const move = (clientX: number) => {
    if (!dragging) return;

    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const diff = clientX - startX.current;

    let newPosition = startPosition.current + diff;

    const maxSwipe = rect.width - circleWidth;

    if (newPosition < 0) newPosition = 0;
    if (newPosition > maxSwipe) newPosition = maxSwipe;

    setPosition(newPosition);
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
        <p className="absolute inset-0 flex items-center justify-center font-semibold">
          Swipe To Confirm →
        </p>

        <div
          onMouseDown={(e) => startDrag(e.clientX)}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          style={{
            left: position,
            touchAction: "none",
          }}
          className="w-14 h-14 bg-green-500 rounded-full absolute top-1 cursor-pointer flex items-center justify-center text-white transition-all duration-75"
        >
          →
        </div>
      </div>
    </div>
  );
};

export default SwipePayment;
