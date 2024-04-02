import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Hotel";
import HotelInfo from "./HotelInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Hotel = ({ _id, company, name, total_rooms, createdAt }) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        {/* {ganti dgn gambar} */}
        <div className="main-icon">{name.charAt(0)}</div>

        <div className="info">
          <h5>{name}</h5>
          <p>{total_rooms}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          {/* <HotelInfo icon={<FaLocationArrow />} text={hotelLocation} /> */}
          <HotelInfo icon={<FaCalendarAlt />} text={date} />
          {/* <HotelInfo icon={<FaBriefcase />} text={hotelType} /> */}
          {/* <div className={`status ${hotelStatus}`}>{hotelStatus}</div> */}
        </div>

        <footer className="actions">
          <Link to={`../edit-hotel/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-hotel/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Hotel;
