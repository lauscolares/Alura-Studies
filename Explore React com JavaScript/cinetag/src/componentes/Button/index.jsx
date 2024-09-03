import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;