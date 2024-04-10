import { Outlet } from "react-router-dom";
import { Navbar } from "./components/NavBar/NavBar";

const App = () => (
  <div>
    <Navbar />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </div>
);

export default App;
