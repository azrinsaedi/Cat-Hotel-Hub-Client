import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useAdminDashboardContext } from "../pages/AdminDashboard";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAdminDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};
export default ThemeToggle;
