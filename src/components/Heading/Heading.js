import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.css';

const Heading = ({
  level = 1,
  className,
  children,
}) => {
  const el = `h${level}`
  return React.createElement(
    el,
    {
      className: cn(s.root, className, s[`level${level}`]),
    },
    children
  );
};

Heading.defaultProps = {
  level: 1,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;