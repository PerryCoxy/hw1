import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Text.module.css';

const Text = ({
  element,
  children,
  className,
  strong = false,
  italic = false,
  disabled = false,
}) => {
  return React.createElement(
    element,
    {
      className: cn(className,
        {
          [s.strong]: strong,
          [s.italic]: italic,
          [s.disabled]: disabled,
        }
        ),
    },
    children
  );
};

Text.defaultProps = {
  element: 'p',
  strong: false,
  italic: false,
  disabled: false,
};

Text.propTypes = {
  element: PropTypes.oneOf(['div', 'p', 'span']),
  children: PropTypes.node,
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Text;