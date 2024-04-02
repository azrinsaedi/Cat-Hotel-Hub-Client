import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import {
  HOTEL_TYPE,
  HOTEL_STATUS,
  HOTEL_SORT_BY,
} from "../../../server/utils/constants";
import { useAllHotelsContext } from "../pages/AllHotels";

const SearchContainer = () => {
  const { searchValues } = useAllHotelsContext();
  const { search, name, company, sort } = searchValues;

  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          {/* search position */}

          <FormRow
            type="search"
            name="search"
            defaultValue=""
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRow
            name="name"
            labelText="name"
            defaultValue=""
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRow
            name="total_rooms"
            labelText="Total Rooms"
            defaultValue="27"
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          {/* <FormRowSelect
            labelText="hotel status"
            name="hotelStatus"
            list={["all", ...Object.values(HOTEL_STATUS)]}
            defaultValue="all"
          /> */}
          {/* <FormRowSelect
            labelText="hotel type"
            name="hotelType"
            list={["all", ...Object.values(HOTEL_TYPE)]}
            defaultValue="all"
          /> */}
          <FormRowSelect
            name="sort"
            defaultValue="newest"
            list={[...Object.values(HOTEL_SORT_BY)]}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <Link
            to="/admin/dashboard/all-hotel"
            className="btn form-btn delete-btn"
          >
            Reset Search Values
          </Link>
          {/* TEMP!!!! */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
