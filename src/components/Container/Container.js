import PropTypes from 'prop-types';
import cn from 'classnames';
import s from "./Container.module.css";

const Container = ({ children, className }) => {
  return (
    <div className={cn(s.root, className)}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;