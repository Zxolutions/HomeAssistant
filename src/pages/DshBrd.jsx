import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Layout({ children, sidebar }) {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">My Smart Home</h1>
        {/* Horizontal Navbar */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Dashboard</Link>
          <Link to="/rooms" className="hover:text-blue-400">Rooms</Link>
          <Link to="/devices" className="hover:text-blue-400">Devices</Link>
          <Link to="/settings" className="hover:text-blue-400">Settings</Link>
        </nav>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Vertical Navbar */}
        <aside className="w-56 bg-gray-100 border-r p-4 flex flex-col space-y-4">
          {sidebar}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">{children}</main>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <>
      {/* Profile Info */}
      <section>
        <div className="bg-white shadow rounded-xl p-4 w-64">
          <div className="h-20 w-20 rounded-full bg-gray-300 mb-3"></div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-sm text-gray-500">Home Owner</p>
        </div>
      </section>

      {/* Quick Rooms */}
      <section>
        <h2 className="text-lg font-bold mb-3">Rooms</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">Living Room</div>
          <div className="bg-white p-4 rounded-xl shadow">Bedroom</div>
          <div className="bg-white p-4 rounded-xl shadow">Kitchen</div>
        </div>
      </section>
    </>
  );
}

function RoomsPage() {
  const rooms = [
    { name: "Living Room", devices: 4, status: "Active" },
    { name: "Bedroom", devices: 2, status: "Idle" },
    { name: "Kitchen", devices: 3, status: "Active" },
    { name: "Garage", devices: 1, status: "Offline" }
  ];

  return (
    <>
      <h2 className="text-lg font-bold mb-3">All Rooms</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-md font-semibold mb-2">{room.name}</h3>
            <p className="text-sm text-gray-500">Devices: {room.devices}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                room.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : room.status === "Idle"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {room.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              sidebar={
                <>
                  <h2 className="text-lg font-semibold mb-2">Dashboard Options</h2>
                  <button className="p-2 rounded-lg bg-white shadow hover:bg-blue-100">Moods</button>
                  <button className="p-2 rounded-lg bg-white shadow hover:bg-blue-100">Preferences</button>
                </>
              }
            >
              <DashboardPage />
            </Layout>
          }
        />
        <Route
          path="/rooms"
          element={
            <Layout
              sidebar={
                <>
                  <h2 className="text-lg font-semibold mb-2">Room Options</h2>
                  <button className="p-2 rounded-lg bg-white shadow hover:bg-blue-100">Add Room</button>
                  <button className="p-2 rounded-lg bg-white shadow hover:bg-blue-100">Manage Layout</button>
                </>
              }
            >
              <RoomsPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
