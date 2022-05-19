import PropTypes from "prop-types";
import s from './Input.module.scss'


const Input = (props) => {
  const {
    id,
    label,
    ...inputProps
  } = props;


  return (
    <div className={s.input_container}>
      <input
        id={id}
        {...inputProps}
      />
      {label &&
        <label htmlFor={id}>{label}</label>
      }
    </div>
  )
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

export default Input;