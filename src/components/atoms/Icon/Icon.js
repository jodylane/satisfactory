import PropTypes from 'prop-types';
import IconOptions from './Icon.options';

const Icon = ({ className, onClick, title, name, size = '1.5em' }) => {
  const Component = IconOptions[name];
  const accessibilityTitle = title ? title : `${name} Icon`;
  return (
    <Component className={className} onClick={onClick} title={accessibilityTitle} size={size} />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Icon;
