import PropTypes from "prop-types";
import cn from 'classnames';
import s from './Input.module.scss'


const Input = (props) => {
  const {
    id,
    type,
    required,
    name,
    placeholder,
    label,
    value,
    onChange
  } = props;

  const classes = cn('className');

  return (
    <div className={s.input_container}>
      <input
        id={id}
        type={type}
        className={classes}
        required={required}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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