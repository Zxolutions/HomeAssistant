import React, { useState } from "react";
import RoomsPage from "./pages/rm";
import DevicesPage from "./pages/devc";
import HomeAssistantDashboard from "./pages/home";
import SettingsPage from "./pages/sttngs";
import animate from "animejs";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const styles = {
    container: { display: 'flex', minHeight: '100vh', backgroundColor: darkMode ? '#0a0f1c' : '#f5f5f5', color: darkMode ? '#00ff9d' : '#111', fontFamily: 'sans-serif', margin: 0, padding: 0 },
    sidebar: { width: '200px', backgroundColor: darkMode ? '#111827' : '#ddd', padding: '20px', display: 'flex', flexDirection: 'column', boxShadow: darkMode ? '2px 0 10px rgba(0,255,157,0.3)' : '2px 0 10px rgba(0,0,0,0.1)' },
    sidebarItem: { margin: '12px 0', padding: '10px', border: `1px solid ${darkMode ? '#00ff9d' : '#111'}`, borderRadius: '8px', textAlign: 'center', cursor: 'pointer' },
    content: { flex: 1, display: 'flex', flexDirection: 'column' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: darkMode ? '#1f2937' : '#eee', boxShadow: darkMode ? '0 1px 3px rgba(0,255,157,0.2)' : '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 20 },
    navButton: { marginRight: '8px', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', border: `1px solid ${darkMode ? '#00ff9d' : '#111'}`, background: 'transparent', color: darkMode ? '#00ff9d' : '#111' },
    footer: { textAlign: 'center', fontSize: '12px', padding: '16px', color: darkMode ? '#00ff9d' : '#111', borderTop: `1px solid ${darkMode ? '#00ff9d' : '#111'}` }
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={{ fontWeight: 600, marginBottom: '20px' }}>LOGO</div>
        <div style={styles.sidebarItem} onClick={() => setPage("dashboard")}>Dashboard</div>
        <div style={styles.sidebarItem} onClick={() => setPage("rooms")}>Rooms</div>
        <div style={styles.sidebarItem} onClick={() => setPage("devices")}>Devices</div>
        <div style={styles.sidebarItem} onClick={() => setPage("settings")}>Settings</div>
      </aside>

      <div style={styles.content}>
        <header style={styles.header}>
          <div style={{ fontSize: '24px', fontWeight: 600 }}>HomeAssistant</div>
          <div>
            <button style={styles.navButton} onClick={() => setPage("dashboard")}>Dashboard</button>
            <button style={styles.navButton} onClick={() => setPage("rooms")}>Rooms</button>
            <button style={styles.navButton} onClick={() => setPage("devices")}>Devices</button>
            <button style={styles.navButton} onClick={() => setPage("settings")}>Settings</button>
          </div>
        </header>

        <main style={{ flex: 1 }}>
          {page === "dashboard" && <HomeAssistantDashboard />}
          {page === "rooms" && <RoomsPage />}
          {page === "devices" && <DevicesPage />}
          {page === "settings" && <SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        </main>

        <footer style={styles.footer}>Made with ❤️ — Anime.js + React + Vite</footer>
      </div>
    </div>
  );
}
