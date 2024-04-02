import Hotel from "./Hotel";
import Wrapper from "../assets/wrappers/HotelsContainer";
import PageBtnContainer from "./PageBtnContainer";
import { useAllHotelsContext } from "../pages/AllHotels";

const HotelsContainer = () => {
  const { data } = useAllHotelsContext();
  const { hotels, totalHotels, numOfPages } = data;
  if (hotels.length === 0) {
    return (
      <Wrapper>
        <h2>No hotels to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalHotels} hotel{hotels.length > 1 && "s"} found
      </h5>
      <div className="hotels">
        {hotels.map((hotel) => {
          return <Hotel key={hotel._id} {...hotel} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default HotelsContainer;
