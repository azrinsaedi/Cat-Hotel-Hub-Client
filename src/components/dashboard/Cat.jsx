import Stars from "../common/Stars";
import { Link, Form } from "react-router-dom";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Cat = ({ _id, name, createdAt }) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  return (
    <div key={_id} className="col-lg-6">
      <div className="border-1 rounded-12 px-20 py-20 bg-light-3">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-xxl-auto">
            <img
              src="/img/tourCards/1/1.png"
              alt="image"
              className="size-200 w-1/1 object-cover rounded-12"
            />
          </div>

          <div className="col">
            <div className="d-flex items-center">
              <i className="icon-pin mr-5"></i>New York, USA
            </div>

            <div className="text-18 lh-15 fw-500 mt-5">{name}</div>

            <div className="d-flex items-center mt-5">
              <div className="d-flex x-gap-5 text-yellow-2 mr-10">
                <Stars star={4} />
              </div>
              <div>
                {3.5} ({234})
              </div>
            </div>

            {/* <div className="row y-gap-15 justify-between items-end pt-5">
              <div className="col-auto">
                <div className="d-flex items-center">
                  <i className="icon-home mr-5"></i>
                  <div className="text-14">{total_rooms} room (s) left</div>
                </div>
              </div>

              <div className="col-auto">
                <div className="text-right md:text-left">
                  <div className="lh-14">$ 50</div>
                  From <span className="text-20 fw-500">${50 + 1000}</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <footer className="actions">
          <div className="d-flex items-center justify-content-end">
            <a
              type="button"
              href={`/account/dashboard/edit-pet/${_id}`}
              className="button -dark-1 size-35 bg-green-3 rounded-full flex-center"
            >
              <i className="icon-pencil text-14"></i>
            </a>
            <Form method="post" action={`/account/dashboard/delete-pet/${_id}`}>
              <button
                type="submit"
                className="button -dark-1 size-35 bg-red-2 rounded-full flex-center ml-10"
              >
                <i className="icon-delete text-14"></i>
              </button>
            </Form>
          </div>
          {/* <Link to={`../edit-hotel/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-hotel/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form> */}
        </footer>
      </div>
    </div>
  );
};
export default Cat;
