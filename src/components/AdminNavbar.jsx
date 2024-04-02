import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useAdminDashboardContext } from "../pages/AdminDashboard";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";
const AdminNavbar = () => {
  const { toggleSidebar } = useAdminDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default AdminNavbar;
