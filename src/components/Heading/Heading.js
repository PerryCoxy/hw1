import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AnchorLink } from './assets/link_icon.svg';
import s from './Heading.module.scss';

const Heading = ({
  level = 1,
  className,
  children,
  colorwhite,
  backLine,
  isAnchorLink,
  linkTo
}) => {
  const childrenWithAnchorLink = <div className={s.childrenWithAnchorLink}>
    {children}
    {isAnchorLink &&
      <Link to={`#${linkTo}`} className={s.anchorLink}>
        <AnchorLink className={s.anchorLink} onClick={() => {navigator.clipboard.writeText(document.location.href)}}/>
      </Link>}
  </div>

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
    }, childrenWithAnchorLink
  );
};

Heading.defaultProps = {
  level: 1,
  colorwhite: false,
  backLine: false,
  isAnchorLink: false
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  colorwhite: PropTypes.bool,
  backLine: PropTypes.bool,
  isAnchorLink: PropTypes.bool,
  linkTo: PropTypes.string,
};

export default Heading;