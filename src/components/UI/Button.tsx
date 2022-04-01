import React from 'react';
import Icon from './Icon';
import Loading from './Loading';
import ButtonInterface from '../../interfaces/ButtonInterface';
const Button = ({
  type,
  color,
  text,
  children,
  icon,
  className,
  onClick,
  loading,
  loadingClassName,
  href,
  target,
  disabled,
  size,
  ariaLabel,
}: ButtonInterface) => {
  const iconStyle = icon ? 'flex' : '';
  const btnType = type === 'submit' ? 'submit' : 'button';
  let btnSize;
  let fontSize;
  let btnBgColor;
  let btnBgColorHover;
  let btnTextColor = 'text-white';
  switch (color) {
    case 'primary':
      btnBgColor = `bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500`;
      btnBgColorHover = `hover:animate-pulse`;
      btnTextColor = `text-white`;
      break;
    case 'primary-dark':
      btnBgColor = `bg-primary-dark-500`;
      btnBgColorHover = `hover:bg-primary-dark-700`;
      btnTextColor = `text-white`;
      break;
    case 'secondary':
      btnBgColor = `bg-secondary-500`;
      btnBgColorHover = `hover:bg-secondary-600`;
      btnTextColor = `text-white`;
      break;
    case 'secondary-dark':
      btnBgColor = `bg-secondary-dark-500`;
      btnBgColorHover = `hover:bg-secondary-dark-600`;
      btnTextColor = `text-white`;
      break;
    case 'primary-gradient':
      btnBgColor = `bg-rainbow`;
      btnBgColorHover = `hover:bg-rainbow hover:animate-rainbow`;
      btnTextColor = `text-white`;
      break;
    case 'primary-gradient-outline':
      btnBgColor = `bg-white dark:bg-primary-dark-500`;
      btnBgColorHover = `hover:bg-white dark:hover:bg-primary-dark-500`;
      btnTextColor = `text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500`;
      break;
    case 'gray':
      btnBgColor = `bg-gray-300`;
      btnBgColorHover = `hover:bg-gray-400`;
      btnTextColor = `text-black`;
      break;
    case 'white':
      btnBgColor = `bg-white`;
      btnBgColorHover = `hover:bg-gray-200`;
      btnTextColor = `text-black`;
      break;
    case 'black':
      btnBgColor = `bg-black`;
      btnBgColorHover = `hover:bg-gray-900`;
      break;
    case 'pink':
      btnBgColor = `bg-pink-500`;
      btnBgColorHover = `hover:bg-pink-600`;
      break;
    case 'green':
      btnBgColor = `bg-green-500`;
      btnBgColorHover = `hover:bg-green-600`;
      break;
    case 'red':
      btnBgColor = `bg-red-500`;
      btnBgColorHover = `hover:bg-red-600`;
      break;
    case 'yellow':
      btnBgColor = `bg-yellow-500`;
      btnBgColorHover = `hover:bg-yellow-600`;
      break;
    case 'orange':
      btnBgColor = `bg-orange-500`;
      btnBgColorHover = `hover:bg-orange-600`;
      break;
    case 'blue':
      btnBgColor = `bg-blue-500`;
      btnBgColorHover = `hover:bg-blue-600`;
      break;
    case 'teal':
      btnBgColor = `bg-teal-400`;
      btnBgColorHover = `hover:bg-teal-500`;
      break;
    case 'indigo':
      btnBgColor = `bg-indigo-500`;
      btnBgColorHover = `hover:bg-indigo-600`;
      break;
    case 'purple':
      btnBgColor = `bg-purple-500`;
      btnBgColorHover = `hover:bg-purple-600`;
      break;
    case 'none':
    default:
      btnBgColor = ``;
      btnBgColorHover = ``;
      btnTextColor = ``;
  }

  switch (size) {
    case 'xsmall':
      btnSize = 'p-2';
      fontSize = 'text-xs';
      break;
    case 'small':
      btnSize = 'p-2';
      fontSize = 'text-sm';
      break;
    case 'medium':
      btnSize = 'p-2';
      fontSize = 'text-base';
      break;
    case 'large':
      btnSize = 'p-2';
      fontSize = 'text-lg';
      break;
    case 'xlarge':
      btnSize = 'p-2';
      fontSize = 'text-xl';
      break;
    case '2xlarge':
      btnSize = 'p-2';
      fontSize = 'text-2xl';
      break;
    case '3xlarge':
      btnSize = 'p-2';
      fontSize = 'text-3xl';
      break;
    case '4xlarge':
      btnSize = 'p-2';
      fontSize = 'text-4xl';
      break;
    default:
      btnSize = ``;
      fontSize = ``;
  }

  const handleClick = () => {
    if (href) {
      // we want to always pass in noopener norefer if href to protect against xss
      window.open(href, target || '_self', 'noopener norefer');
    } else if (onClick) {
      onClick();
    }
  };

  const disabledClass = disabled ? `opacity-50 cursor-not-allowed` : '';
  const formattedClassName = className || '';
  const combinedClassNames = `${iconStyle} ${btnSize} ${fontSize} ${btnBgColor} ${
    !disabled && btnBgColorHover
  } ${formattedClassName} ${disabledClass}`;
  const content = text ? <span className={btnTextColor}>{text}</span> : children;
  const onClickProp =
    !disabled && !!handleClick ? {onClick: handleClick} : {};
  return (
    <button
      aria-label={ariaLabel || ''}
      type={btnType}
      className={`${combinedClassNames} bg-center items-center cursor-pointer shadow-xs rounded`}
      {...onClickProp}
    >
      {icon && !loading && icon.position === 'none' ? (
        <Icon
          name={icon.name}
          color={icon.color}
          solid={icon.solid}
          size={icon.size}
          className={`${icon.className || ''}`}
        />
      ) : null}
      {icon && !loading && icon.position === 'left' ? (
        <Icon
          name={icon.name}
          color={icon.color}
          solid={icon.solid}
          size={icon.size}
          className={`${icon.className || ''} mr-2`}
        />
      ) : null}

      {!loading && content}
      {loading && (
        <Loading className={loadingClassName || 'h-4 w-4'} isButton />
      )}

      {icon && !loading && icon.position === 'right' ? (
        <Icon
          name={icon.name}
          color={icon.color}
          solid={icon.solid}
          size={icon.size}
          className={`${icon.className || ''} ml-2`}
        />
      ) : null}
    </button>
  );
};

export default Button;
