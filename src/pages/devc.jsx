import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import DeviceModal from "../components/DeviceModal";

export default function DevicesPage() {
  const devicesSeed = [
    { id: 1, name: "Smart Lamp", status: "On", location: "Living Room" },
    { id: 2, name: "Smart TV", status: "Off", location: "Living Room" },
    { id: 3, name: "Thermostat", status: "Cooling", location: "Living Room" },
    { id: 4, name: "Fan", status: "On", location: "Bedroom" },
    { id: 5, name: "Oven", status: "Off", location: "Kitchen" },
    { id: 6, name: "Fridge", status: "Running", location: "Kitchen" },
    { id: 7, name: "PC", status: "On", location: "Office" },
    { id: 8, name: "Speaker", status: "Off", location: "Office" },
  ];

  const [devices] = useState(devicesSeed);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [originRect, setOriginRect] = useState(null);

  useEffect(() => {
    if (headerRef.current) {
      animate(headerRef.current, {
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      });
    }
    cardRefs.current = cardRefs.current.slice(0, devices.length);
  }, [devices.length]);

  const handleCardClick = (device, index) => {
    const el = cardRefs.current[index];
    if (el) {
      const rect = el.getBoundingClientRect();
      setOriginRect(rect);
      setSelectedDevice(device);
    }
  };

  const handleCloseModal = () => {
    setSelectedDevice(null);
    setOriginRect(null);
  };

  const styles = {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#0a0f1c",
      color: "#00ff9d",
      fontFamily: "sans-serif",
      margin: 0,
      padding: 0,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
      backgroundColor: "#1f2937",
      boxShadow: "0 1px 3px rgba(0,255,157,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 20,
    },
    section: {
      margin: "16px",
    },
    deviceList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: "16px",
      padding: "8px",
    },
    deviceCard: {
      height: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "12px",
      backgroundColor: "#1f2937",
      border: "1px solid #00ff9d",
      cursor: "pointer",
      color: "#00ff9d",
      boxShadow: "0 2px 6px rgba(0,255,157,0.3)",
      transform: "scale(1)",
    },
    footer: {
      textAlign: "center",
      fontSize: "12px",
      padding: "16px",
      color: "#00ff9d",
      borderTop: "1px solid #00ff9d",
      marginTop: "auto",
    },
  };

  return (
    <div style={styles.container}>
      <header ref={headerRef} style={styles.header}>
        <div style={{ fontSize: "24px", fontWeight: 600 }}>Devices</div>
      </header>

      <main>
        <section style={styles.section}>
          <div style={{ fontSize: "18px", marginBottom: "8px", color: "#00ff9d" }}>
            All Devices
          </div>
          <div style={styles.deviceList}>
            {devices.map((device, index) => (
              <div
                key={device.id}
                ref={(el) => (cardRefs.current[index] = el)}
                style={styles.deviceCard}
                onClick={() => handleCardClick(device, index)}
              >
                <div style={{ fontSize: "16px", fontWeight: 600 }}>{device.name}</div>
                <div>Status: {device.status}</div>
                <div>Location: {device.location}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        Made with ❤️ — Anime.js + React + Vite
      </footer>

      {selectedDevice && (
        <DeviceModal
          device={selectedDevice}
          onClose={handleCloseModal}
          originRect={originRect}
        />
      )}
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { animate} from "animejs";
import DeviceModal from "../components/DeviceModal";

export default function DevicesPage() {
  const devicesSeed = [
    { id: 1, name: "Smart Lamp", status: "On", location: "Living Room" },
    { id: 2, name: "Smart TV", status: "Off", location: "Living Room" },
    { id: 3, name: "Thermostat", status: "Cooling", location: "Living Room" },
    { id: 4, name: "Fan", status: "On", location: "Bedroom" },
    { id: 5, name: "Oven", status: "Off", location: "Kitchen" },
    { id: 6, name: "Fridge", status: "Running", location: "Kitchen" },
    { id: 7, name: "PC", status: "On", location: "Office" },
    { id: 8, name: "Speaker", status: "Off", location: "Office" },
  ];

  const [devices] = useState(devicesSeed);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [originRect, setOriginRect] = useState(null);

  useEffect(() => {
    if (headerRef.current) {
      animate(headerRef.current, {
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      });
    }
    cardRefs.current = cardRefs.current.slice(0, devices.length);
  }, [devices.length]);

  const handleCardClick = (device, index) => {
    const el = cardRefs.current[index];
    if (el) {
      const rect = el.getBoundingClientRect();
      setOriginRect(rect);
      setSelectedDevice(device);
    }
  };

  const handleCloseModal = () => {
    setSelectedDevice(null);
    setOriginRect(null);
  };

  const styles = {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#0a0f1c",
      color: "#00ff9d",
      fontFamily: "sans-serif",
      margin: 0,
      padding: 0,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
      backgroundColor: "#1f2937",
      boxShadow: "0 1px 3px rgba(0,255,157,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 20,
    },
    section: {
      margin: "16px",
    },
    deviceList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: "16px",
      padding: "8px",
    },
    deviceCard: {
      height: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "12px",
      backgroundColor: "#1f2937",
      border: "1px solid #00ff9d",
      cursor: "pointer",
      color: "#00ff9d",
      boxShadow: "0 2px 6px rgba(0,255,157,0.3)",
      transform: "scale(1)",
    },
    footer: {
      textAlign: "center",
      fontSize: "12px",
      padding: "16px",
      color: "#00ff9d",
      borderTop: "1px solid #00ff9d",
      marginTop: "auto",
    },
  };

  return (
    <div style={styles.container}>
      <header ref={headerRef} style={styles.header}>
        <div style={{ fontSize: "24px", fontWeight: 600 }}>Devices</div>
      </header>

      <main>
        <section style={styles.section}>
          <div style={{ fontSize: "18px", marginBottom: "8px", color: "#00ff9d" }}>
            All Devices
          </div>
          <div style={styles.deviceList}>
            {devices.map((device, index) => (
              <div
                key={device.id}
                ref={(el) => (cardRefs.current[index] = el)}
                style={styles.deviceCard}
                onClick={() => handleCardClick(device, index)}
              >
                <div style={{ fontSize: "16px", fontWeight: 600 }}>{device.name}</div>
                <div>Status: {device.status}</div>
                <div>Location: {device.location}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        Made with ❤️ — Anime.js + React + Vite
      </footer>

      {selectedDevice && (
        <DeviceModal
          device={selectedDevice}
          onClose={handleCloseModal}
          originRect={originRect}
        />
      )}
    </div>
  );
}
