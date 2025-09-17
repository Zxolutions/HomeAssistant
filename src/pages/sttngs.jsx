export default function Settings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">⚙️ Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Theme</label>
          <select className="mt-1 p-2 border rounded w-full">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Notifications</label>
          <input type="checkbox" className="mt-1" defaultChecked />
        </div>
      </form>
    </div>
  );
}
