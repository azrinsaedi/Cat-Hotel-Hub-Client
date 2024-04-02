import { Logo } from "../components";
import Wrapper from "../assets/wrappers/MainNavbar";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Wrapper>
      <div className="container nav-container">
        <div className="left-nav">
          <Logo />
        </div>
        <div className="flex-container right-nav">
          <Link to="/admin/register" className="btn register-link">
            Register
          </Link>
          <Link to="/admin/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default MainNavbar;
