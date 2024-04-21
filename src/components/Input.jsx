const Input = ({ id, label, value, onChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="number" value={value} onChange={onChange} />
  </>
);

export default Input;
