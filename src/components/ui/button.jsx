import PropTypes from "prop-types";

export const Button = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick} 
    className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
