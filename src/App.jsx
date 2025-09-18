import React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">My Smart Home</h1>
        {/* Horizontal Navbar */}
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-blue-400">Dashboard</a>
          <a href="#" className="hover:text-blue-400">Rooms</a>
          <a href="#" className="hover:text-blue-400">Devices</a>
          <a href="#" className="hover:text-blue-400">Settings</a>
        </nav>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Vertical Navbar */}
        <aside className="w-56 bg-gray-100 border-r p-4 flex flex-col space-y-4">
          <h2 className="text-lg font-semibold mb-2">Dashboard Options</h2>
          <button className="p-2 rounded-lg bg-white shadow hover:bg-blue-100">Moods</button>
          <button className="p-2 rounded-lg bg-white shadow hover:bg-blue-100">Preferences</button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* Profile Info */}
          <section>
            <div className="bg-white shadow rounded-xl p-4 w-64">
              <div className="h-20 w-20 rounded-full bg-gray-300 mb-3"></div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">Home Owner</p>
            </div>
          </section>

          {/* Rooms */}
          <section>
            <h2 className="text-lg font-bold mb-3">Rooms</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow">Living Room</div>
              <div className="bg-white p-4 rounded-xl shadow">Bedroom</div>
              <div className="bg-white p-4 rounded-xl shadow">Kitchen</div>
            </div>
          </section>

          {/* Devices */}
          <section>
            <h2 className="text-lg font-bold mb-3">Devices</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow">Smart Light</div>
              <div className="bg-white p-4 rounded-xl shadow">Thermostat</div>
              <div className="bg-white p-4 rounded-xl shadow">Smart Speaker</div>
              <div className="bg-white p-4 rounded-xl shadow">Security Camera</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
