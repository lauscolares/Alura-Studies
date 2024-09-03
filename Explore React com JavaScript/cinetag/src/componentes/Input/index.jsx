import './Input.css';

const Input = ({ label, id, value, onChange, inputType = "text", placeholder, required = false }) => {
  return (
    <div className="input-div" >
      <label htmlFor={id}>{label}</label>
      <input 
      type={inputType} 
      id={id} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      required={required} 
      />
    </div>
  );
};

export default Input;