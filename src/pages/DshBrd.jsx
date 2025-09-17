export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">🏠 Dashboard</h2>
      <p className="text-gray-600">Quick overview of your smart home system.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-xl">Lights</div>
        <div className="p-4 bg-white shadow rounded-xl">Thermostats</div>
        <div className="p-4 bg-white shadow rounded-xl">Security</div>
      </div>
    </div>
  );
}
