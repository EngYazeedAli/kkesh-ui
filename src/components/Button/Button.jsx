import "./Button.css";

const Button = ({ label, onClick }) => {
  return <button className="kkesh-button" onClick={onClick}>{label}</button>;
};

export default Button;
