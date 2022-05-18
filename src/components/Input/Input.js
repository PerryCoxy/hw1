import PropTypes from "prop-types";
import s from './Input.module.scss'


const Input = (props) => {
  const {
    id,
    type,
    label,
    onChange,
    ...inputProps
  } = props;


  return (
    <div className={s.input_container}>
      <input
        id={id}
        type={type}
        onChange={onChange}
        {...inputProps}
      />
      {label &&
        <label htmlFor={id}>{label}</label>
      }
    </div>
  )
};

Input.defaultProps = {
  required: false,
  type: 'text'
}

Input.propTypes = {
  type: PropTypes.oneOf(['email', 'password', 'text']),
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input;