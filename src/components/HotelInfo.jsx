import Wrapper from "../assets/wrappers/HotelInfo";

const HotelInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="hotel-icon">{icon}</span>
      <span className="hotel-text">{text}</span>
    </Wrapper>
  );
};
export default HotelInfo;
