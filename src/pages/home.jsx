import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function HomeAssistantDashboard() {
  const roomsSeed = [
    { id: 1, name: "Living Room", temp: 24, devices: ["Lamp", "TV", "Thermostat"] },
    { id: 2, name: "Bedroom", temp: 22, devices: ["Lamp", "Fan"] },
    { id: 3, name: "Kitchen", temp: 26, devices: ["Oven", "Fridge"] },
    { id: 4, name: "Office", temp: 23, devices: ["PC", "Speaker"] },
  ];

  const [rooms] = useState(roomsSeed);
  const [activeRoom, setActiveRoom] = useState(rooms[0].id);
  const headerRef = useRef(null);
  const roomRefs = useRef([]);
  const deviceRefs = useRef([]);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      animate(headerRef.current, {
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      });
    }

    // Staggered entrance for rooms
    roomRefs.current.forEach((el, index) => {
      if (el) {
        animate(el, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: index * 100,
          duration: 500,
          easing: "easeOutExpo",
        });
      }
    });

    // Staggered entrance for devices
    deviceRefs.current.forEach((el, index) => {
      if (el) {
        animate(el, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: index * 80,
          duration: 500,
          easing: "easeOutExpo",
        });
      }
    });
  }, [rooms, activeRoom]);

  const handleRoomClick = (roomId, index) => {
    if (roomId === activeRoom) return;
    setActiveRoom(roomId);

    if (roomRefs.current[index]) {
      animate(roomRefs.current[index], [
        { scale: 0.95, duration: 100, easing: "easeOutQuad" },
        { scale: 1, duration: 200, easing: "easeOutElastic(1, .5)" },
      ]);
    }
  };

  const styles = {
    container: { display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#0a0f1c", color: "#00ff9d", fontFamily: "sans-serif", margin: 0, padding: 0 },
    content: { flex: 1, display: "flex", flexDirection: "column" },
    header: { display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#1f2937", boxShadow: "0 1px 3px rgba(0,255,157,0.2)", position: "sticky", top: 0, zIndex: 20 },
    section: { margin: "16px" },
    footer: { textAlign: "center", fontSize: "12px", padding: "16px", color: "#00ff9d", borderTop: "1px solid #00ff9d" },
    profileSection: { padding: "16px", border: "1px solid #ff7f11", borderRadius: "12px", backgroundColor: "#1f2937", margin: "16px", color: "#ff7f11" },
    profileTitle: { fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#ff7f11" },
    profileContent: { display: "flex", justifyContent: "space-between", flexWrap: "wrap" },
    roomScroll: { display: "flex", overflowX: "auto", padding: "8px", scrollbarWidth: "thin", msOverflowStyle: "none" },
    roomCard: {
      minWidth: "200px",
      padding: "16px",
      borderRadius: "12px",
      marginRight: "12px",
      cursor: "pointer",
      color: "#00ff9d",
      flexShrink: 0,
      background: "linear-gradient(135deg, #111827, #1f2937)",
      border: "1px solid rgba(0,255,157,0.3)",
      boxShadow: "0 2px 6px rgba(0,255,157,0.2)",
      transition: "all 0.3s",
    },
    deviceScroll: { display: "flex", overflowX: "auto", padding: "8px", gap: "12px", scrollbarWidth: "thin", msOverflowStyle: "none" },
    deviceCard: {
      minWidth: "120px",
      padding: "16px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #0a0f1c, #111827)",
      border: "1px solid rgba(0,255,157,0.3)",
      textAlign: "center",
      flexShrink: 0,
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,255,157,0.2)",
      transition: "all 0.3s",
    },
  };

  const activeRoomObj = rooms.find((r) => r.id === activeRoom);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header ref={headerRef} style={styles.header}>
          <div style={{ fontSize: "24px", fontWeight: 600 }}>HomeAssistant — Dashboard</div>
        </header>

        <main>
          <section style={styles.profileSection}>
            <div style={styles.profileTitle}>Profile</div>
            <div style={styles.profileContent}>
              <div>Login Info: user@example.com</div>
              <div>Account: Premium</div>
              <div>Quick Actions: Logout | Edit</div>
            </div>
          </section>

          <section style={styles.section}>
            <div style={{ fontSize: "18px", marginBottom: "8px", color: "#00ff9d" }}>Rooms</div>
            <div style={styles.roomScroll}>
              {rooms.map((room, index) => (
                <div
                  key={room.id}
                  ref={(el) => (roomRefs.current[index] = el)}
                  style={{
                    ...styles.roomCard,
                    border: room.id === activeRoom ? "2px solid #00ff9d" : styles.roomCard.border,
                  }}
                  onClick={() => handleRoomClick(room.id, index)}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,255,157,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,255,157,0.2)")}
                >
                  <div>{room.name}</div>
                  <div>{room.temp}°C</div>
                  <div>{room.devices.length} devices</div>
                </div>
              ))}
            </div>
          </section>

          <section style={styles.section}>
            <div style={{ fontSize: "18px", marginBottom: "8px", color: "#00ff9d" }}>Devices</div>
            <div style={styles.deviceScroll}>
              {activeRoomObj?.devices.map((device, idx) => (
                <div
                  key={idx}
                  ref={(el) => (deviceRefs.current[idx] = el)}
                  style={styles.deviceCard}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,255,157,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,255,157,0.2)")}
                  onClick={() =>
                    animate(deviceRefs.current[idx], [
                      { scale: 0.95, duration: 100, easing: "easeOutQuad" },
                      { scale: 1, duration: 200, easing: "easeOutElastic(1, .5)" },
                    ])
                  }
                >
                  <div>{device}</div>
                  <div>Online</div>
                </div>
              ))}
            </div>
          </section>
        </main>

        
      </div>
    </div>
  );
}
