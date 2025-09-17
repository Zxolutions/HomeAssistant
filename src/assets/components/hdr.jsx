import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-2">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Smart Home Logo" className="w-8 h-8" />
        <h1 className="text-lg font-bold text-gray-800">Smart Home</h1>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Hello, User</span>
        <img
          src="https://via.placeholder.com/32"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
