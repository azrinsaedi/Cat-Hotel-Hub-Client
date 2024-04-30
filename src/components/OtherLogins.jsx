const OtherLogins = () => {
  return (
    <>
      <div className="relative line mt-50 mb-30">
        <div className="line__word fw-500">OR</div>
      </div>

      <div className="row y-gap-15">
        <div className="col">
          <button
            type="submit"
            className="button -md -outline-blue-1 text-blue-1 col-12"
          >
            <i className="icon-facebook mr-10"></i>
            Continue Facebook
          </button>
        </div>

        <div className="col">
          <button className="button -md -outline-red-1 text-red-1 col-12">
            <i className="icon-google mr-10"></i>
            Continue Google
          </button>
        </div>
      </div>
    </>
  );
};
export default OtherLogins;
