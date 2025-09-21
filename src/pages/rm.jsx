import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import RoomModal from "../components/RoomModal";

export default function RoomsPage() {
  const roomsSeed = [
    { id: 1, name: "Living Room", temp: 24, devices: ["Lamp", "TV", "Thermostat"] },
    { id: 2, name: "Bedroom", temp: 22, devices: ["Lamp", "Fan"] },
    { id: 3, name: "Kitchen", temp: 26, devices: ["Oven", "Fridge"] },
    { id: 4, name: "Office", temp: 23, devices: ["PC", "Speaker"] },
  ];

  const [rooms] = useState(roomsSeed);
  const [expandedRoom, setExpandedRoom] = useState(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      animate(headerRef.current, {
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      });
    }
    cardRefs.current = cardRefs.current.slice(0, rooms.length);
  }, [rooms.length]);

  const handleClick = (room, index) => {
    const cardEl = cardRefs.current[index];
    if (cardEl instanceof HTMLElement) {
      animate(cardEl, {
        scale: [0.95, 1],
        duration: 300,
        easing: "easeOutElastic(1, .5)",
      });
    }
    setExpandedRoom(room);
  };

  const styles = {
    container: { flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#0a0f1c", color: "#00ff9d", fontFamily: "sans-serif" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", backgroundColor: "#1f2937", boxShadow: "0 1px 3px rgba(0,255,157,0.2)", position: "sticky", top: 0, zIndex: 20 },
    roomScroll: { display: "flex", flexWrap: "wrap", gap: "16px", padding: "8px" },
    roomCard: { flex: "1 1 200px", padding: "16px", borderRadius: "12px", cursor: "pointer", color: "#00ff9d", background: "linear-gradient(135deg, #111827, #1f2937)", border: "1px solid rgba(0,255,157,0.3)", transition: "all 0.3s" },
  };

  return (
    <div style={styles.container}>
      <header ref={headerRef} style={styles.header}>
        <div style={{ fontSize: 24, fontWeight: 600 }}>Rooms</div>
      </header>
      <main>
        <div style={styles.roomScroll}>
          {rooms.map((room, idx) => (
            <div
              key={room.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              style={styles.roomCard}
              onClick={() => handleClick(room, idx)}
            >
              <div style={{ fontSize: 16, fontWeight: 600 }}>{room.name}</div>
              <div>{room.temp}°C</div>
              <div>{room.devices.join(", ")}</div>
            </div>
          ))}
        </div>
      </main>

      {expandedRoom && <RoomModal room={expandedRoom} onClose={() => setExpandedRoom(null)} />}
    </div>
  );
}
