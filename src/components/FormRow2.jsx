const FormRow2 = ({
  type,
  name,
  labelText,
  defaultValue = "",
  onChange,
  className,
}) => {
  return (
    <>
      {type !== "hidden" && (
        <div className={className}>
          <label htmlFor={name} className="lh-1 text-16 pb-8">
            {labelText || name}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
            className="form-input"
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

export default FormRow2;
