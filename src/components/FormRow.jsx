const FormRow = ({
  type,
  name,
  labelText,
  onChange,
  className,
  prefix,
  suffix,
  required = false,
  value,
}) => {
  return (
    <>
      {type !== 'hidden' && (
        <div className={className}>
          {labelText && (
            <label htmlFor={name} className='lh-1 text-16 pb-8'>
              {labelText}
            </label>
          )}

          {prefix}
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className='form-input'
            required={required}
          />
          {suffix}
        </div>
      )}
      {type === 'hidden' && (
        <input
          type={type}
          id={name}
          name={name}
          className='form-input'
          onChange={onChange}
          value
          required
        />
      )}
    </>
  );
};
export default FormRow;
