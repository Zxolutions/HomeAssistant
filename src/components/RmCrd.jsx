import React, { useState, useRef, useEffect } from "react";
import { animate } from "animejs"; // ✅ correct import for v4

export default function RoomCard({ name, devices = [], status }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (cardRef.current) {
      animate({
        targets: cardRef.current,
        height: expanded ? 200 : 100, // ✅ animate auto-appends px
        easing: "easeInOutQuad",
        duration: 500,
      });
    }
  }, [expanded]);

  return (
    <div
      ref={cardRef}
      onClick={toggleExpand}
      className="bg-white shadow-md rounded-xl p-4 mb-4 cursor-pointer transition-all overflow-hidden"
      style={{ height: "100px" }} // ✅ initial height
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{status || "Idle"}</p>

      {expanded && (
        <div className="mt-3">
          <h3 className="text-sm font-bold mb-1">Devices:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            {devices.length > 0 ? (
              devices.map((d, i) => <li key={i}>• {d}</li>)
            ) : (
              <li>No devices linked</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
