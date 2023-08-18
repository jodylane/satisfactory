import PropTypes from 'prop-types';
import IconOptions from './options';
import { Error } from './Icon.styled';
import Popover from '@atoms/Popover';
import usePopover from '@lib/hooks/usePopover';

const ICON_CATEGORY_NAMES = Object.keys(IconOptions);
const ICON_NAMES = Object.values(IconOptions)
  .map((iconGroup) => Object.keys(iconGroup))
  .flat();

const Icon = ({ className, onClick, title, category, name, size = '1.5em' }) => {
  const Component = IconOptions[category][name];
  const accessibilityTitle = title ? title : `${name} Icon`;
  // TODO: How the hell am I gonna display this error nicely.
  /**
   * <Rant> I want this to be a super friendly designer / developer component library
   * Im thinking I need potentially set some sort of alert inbox hook to trigger some alert
   * on the page to help navigate a designer to resolve this issue. otherwise Im stuck with this
   * rendering some form of display output that might severely mess with where ever this icon
   * is a child of. Not sure how much I should control that also really dont want to add a "is this
   * in storybook prop" might just say F%$k it & just bite the bullet </Rant>
   */
  if (!Component) {
    const message = `Invalid Icon Name: ${name} for category: ${category}. Icons available under this category are: ${Object.keys(
      IconOptions[category]
    ).join(', ')}`;

    console.error(message);

    const { visible, togglePopover, ref, target } = usePopover(true);

    const handleClick = () => {
      togglePopover(!visible);
    };

    return (
      <>
        <Error ref={ref} title='Error Icon' size='5em' onClick={handleClick} />
        <Popover visible={visible} setVisible={handleClick} target={target} position='left'>
          {message}
        </Popover>
      </>
    );
  }

  return (
    <Component className={className} onClick={onClick} title={accessibilityTitle} size={size} />
  );
};

Icon.propTypes = {
  /**
   * class name generated by styled components, used by styled components to override styles if necessary.
   */
  className: PropTypes.string,
  /**
   * used to give override default title given for screen readers for icons.
   */
  title: PropTypes.string,
  /**
   * The name of the Icon you wish to use that belongs to a category. This field is also the default accessibility
   * title for screen readers.
   */
  name: PropTypes.oneOf(ICON_NAMES),
  /**
   * The name of the category for the group of Icons you wish to use.
   */
  category: PropTypes.oneOf(ICON_CATEGORY_NAMES),
  /**
   * This makes the height & width of your icon the same. You can use a number which defaults to px value,
   * for any other unit you would use a string including the number & unit.
   * For more info visit https://github.com/styled-icons/styled-icons#props
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Icon;
export { ICON_NAMES, ICON_CATEGORY_NAMES, IconOptions };
