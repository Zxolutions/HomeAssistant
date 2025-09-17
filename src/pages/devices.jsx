export default function Devices() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">📱 Devices</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Device</th>
            <th className="p-2">Room</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">Smart Light</td>
            <td className="p-2">Living Room</td>
            <td className="p-2 text-green-600">On</td>
          </tr>
          <tr className="border-b">
            <td className="p-2">Thermostat</td>
            <td className="p-2">Bedroom</td>
            <td className="p-2 text-blue-600">22°C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
