import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function RoomModal({ room, onClose }) {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (overlayRef.current && cardRef.current) {
      // Fade in overlay
      animate(overlayRef.current, {
        opacity: [0, 1],
        duration: 300,
        easing: "easeOutQuad",
      });

      // Slide & scale card from small to center
      animate(cardRef.current, {
        scale: [0.8, 1],
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 500,
        easing: "easeOutElastic(1, .6)",
      });
    }
  }, []);

  const handleClose = () => {
    animate(cardRef.current, {
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: 300,
      easing: "easeInQuad",
      complete: onClose,
    });

    animate(overlayRef.current, {
      opacity: [1, 0],
      duration: 300,
      easing: "easeInQuad",
    });
  };

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(12px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 50,
      opacity: 0,
    },
    card: {
      background: "linear-gradient(135deg, #111827, #1f2937)",
      border: "1px solid rgba(0,255,157,0.3)",
      borderRadius: "16px",
      padding: "24px",
      width: "400px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
      color: "#00ff9d",
      transformOrigin: "center",
      opacity: 0,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    closeBtn: {
      cursor: "pointer",
      fontSize: "18px",
      padding: "4px 8px",
      border: "1px solid #00ff9d",
      borderRadius: "6px",
      background: "transparent",
      color: "#00ff9d",
    },
    deviceList: {
      marginTop: "12px",
      padding: "12px",
      border: "1px solid rgba(0,255,157,0.2)",
      borderRadius: "8px",
      background: "rgba(0,255,157,0.05)",
    },
  };

  return (
    <div ref={overlayRef} style={styles.overlay} onClick={handleClose}>
      <div
        ref={cardRef}
        style={styles.card}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={styles.header}>
          <h2>{room.name}</h2>
          <button style={styles.closeBtn} onClick={handleClose}>
            ✕
          </button>
        </div>
        <p>Temperature: {room.temp}°C</p>
        <div style={styles.deviceList}>
          <h4>Devices</h4>
          <ul>
            {room.devices.map((d, i) => (
              <li key={i}>{d} — Online</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
