const FormRow = ({ type, name, labelText, defaultValue = "", onChange }) => {
  return (
    <>
      {type !== "hidden" && (
        <div className="form-row">
          <label htmlFor={name} className="form-label">
            {labelText || name}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            className="form-input"
            defaultValue={defaultValue}
            onChange={onChange}
            required
          />
        </div>
      )}
      {type === "hidden" && (
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          onChange={onChange}
          defaultValue={defaultValue}
          required
        />
      )}
    </>
  );
};

export default FormRow;
