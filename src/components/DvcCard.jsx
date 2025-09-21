import React, { useState, useRef, useEffect } from "react";
import anime from "animejs";

export default function DeviceCard({ name, type, status }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (cardRef.current) {
      anime({
        targets: cardRef.current,
        height: expanded ? "180px" : "90px",
        easing: "easeInOutQuad",
        duration: 500,
      });
    }
  }, [expanded]);

  return (
    <div
      ref={cardRef}
      onClick={toggleExpand}
      className="bg-blue-50 shadow-md rounded-xl p-3 mb-3 cursor-pointer transition-all overflow-hidden"
      style={{ height: "90px" }} // initial height
    >
      <h2 className="text-md font-semibold">{name}</h2>
      <p className="text-gray-600">{type}</p>

      {expanded && (
        <div className="mt-2">
          <p className="text-sm text-gray-700">Status: {status || "Unknown"}</p>
          <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Toggle Power
          </button>
        </div>
      )}
    </div>
  );
}
