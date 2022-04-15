import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.scss';

const Heading = ({
  level = 1,
  className,
  children,
  colorwhite,
  backLine
}) => {
  const el = `h${level}`
  return React.createElement(
    el,
    {
      className: cn(
        s.root,
        className,
        s[`level${level}`], {
        [s.backLine]: backLine,
        [s.colorwhite]: colorwhite
      }
      ),
    },
    children
  );
};

Heading.defaultProps = {
  level: 1,
  colorwhite: false,
  backLine: false,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  colorwhite: PropTypes.bool,
  backLine: PropTypes.bool,
};

export default Heading;