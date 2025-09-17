import { useState } from "react";
import Header from "./components/hdr";
import NavBar from "./components/NvBr";
import Dashboard from "./pages/DshBrd";
import Rooms from "./pages/rooms";
import Devices from "./pages/devices";
import Settings from "./pages/sttngs";

function App() {
  const [route, setRoute] = useState("/");

  const renderPage = () => {
    switch (route) {
      case "/rooms":
        return <Rooms />;
      case "/devices":
        return <Devices />;
      case "/settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <NavBar active={route} setActive={setRoute} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
