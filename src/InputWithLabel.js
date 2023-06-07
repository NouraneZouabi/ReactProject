const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  children
}) => (
  <>
    <div class="form-group ">

      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input className="form-control " id={id} type={type} value={value} onChange={onInputChange} />
    </div>
  </>
);

export default InputWithLabel;