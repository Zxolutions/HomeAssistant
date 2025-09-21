import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function SettingsPage() {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      animate(headerRef.current, {
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      });
    }
  }, []);

  const styles = {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#0a0f1c",
      color: "#00ff9d",
      fontFamily: "sans-serif",
      padding: "0",
      margin: "0",
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
      padding: "16px",
      backgroundColor: "#1f2937",
      borderRadius: "12px",
      border: "1px solid #00ff9d",
    },
    sectionTitle: { fontSize: "18px", fontWeight: 600, marginBottom: "12px" },
    settingItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 0",
      borderBottom: "1px solid rgba(0,255,157,0.2)",
    },
    input: {
      padding: "6px 8px",
      borderRadius: "6px",
      border: "1px solid #00ff9d",
      backgroundColor: "#0a0f1c",
      color: "#00ff9d",
      outline: "none",
    },
    toggle: {
      width: "40px",
      height: "20px",
      borderRadius: "10px",
      backgroundColor: "#111827",
      position: "relative",
      cursor: "pointer",
      border: "1px solid #00ff9d",
    },
    toggleCircle: (enabled) => ({
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: "#00ff9d",
      position: "absolute",
      top: "1px",
      left: enabled ? "20px" : "1px",
      transition: "left 0.2s",
    }),
    footer: {
      textAlign: "center",
      fontSize: "12px",
      padding: "16px",
      color: "#00ff9d",
      borderTop: "1px solid #00ff9d",
      marginTop: "auto",
    },
  };

  const [toggles, setToggles] = React.useState({
    darkMode: true,
    notifications: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={styles.container}>
      <header ref={headerRef} style={styles.header}>
        <div style={{ fontSize: "24px", fontWeight: 600 }}>Settings</div>
      </header>

      <main>
        <section style={styles.section}>
          <div style={styles.sectionTitle}>Profile</div>
          <div style={styles.settingItem}>
            <span>Username</span>
            <input style={styles.input} type="text" placeholder="John Doe" />
          </div>
          <div style={styles.settingItem}>
            <span>Email</span>
            <input style={styles.input} type="email" placeholder="john@example.com" />
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>Preferences</div>
          <div style={styles.settingItem}>
            <span>Dark Mode</span>
            <div style={styles.toggle} onClick={() => handleToggle("darkMode")}>
              <div style={styles.toggleCircle(toggles.darkMode)}></div>
            </div>
          </div>
          <div style={styles.settingItem}>
            <span>Notifications</span>
            <div style={styles.toggle} onClick={() => handleToggle("notifications")}>
              <div style={styles.toggleCircle(toggles.notifications)}></div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionTitle}>System</div>
          <div style={styles.settingItem}>
            <span>Version</span>
            <span>v1.0.0</span>
          </div>
          <div style={styles.settingItem}>
            <span>Auto Update</span>
            <div style={styles.toggle} onClick={() => handleToggle("autoUpdate")}>
              <div style={styles.toggleCircle(toggles.autoUpdate)}></div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
