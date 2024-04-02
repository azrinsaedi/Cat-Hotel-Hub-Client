import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { MainNavbar, DateTimePicker } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <MainNavbar />

      <div className="container page">
        <DateTimePicker />
        <div className="info">
          <h1>
            hotel <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/admin/register" className="btn register-link">
            Register
          </Link>
          <Link to="/admin/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="hotel hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
