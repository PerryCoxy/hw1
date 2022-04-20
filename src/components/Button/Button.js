import PropTypes from "prop-types";
import cn from 'classnames';

import s from './Button.module.scss'

const Button = ({
  id,
  value,
  isWhite,
  onBackClick  }) => {

  const handleBioClick = () => {
    onBackClick (id);
  };
  return (
    <button
      className={cn(s.root, {
        [s.white]: isWhite
      })}
      onClick={handleBioClick}
    >
      {value}
    </button>
  )
}

Button.defaultProps = {
  isWhite: false,
}

Button.propTypes = {
  value: PropTypes.string,
  isWhite: PropTypes.bool,
  onBioClick: PropTypes.func,
}


export default Button;