/**
 * Reusable Button Component
 * 
 * @description A flexible, accessible button component with multiple variants
 * @author Jackson Fall
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className = '',
  ...rest
}) => {
  const baseClass = 'jg-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    fullWidth && `${baseClass}--full-width`,
    loading && `${baseClass}--loading`,
    disabled && `${baseClass}--disabled`,
    className
  ].filter(Boolean).join(' ');

  const renderIcon = () => {
    if (loading) {
      return <span className="jg-button__spinner" />;
    }
    if (icon) {
      return <span className="jg-button__icon">{icon}</span>;
    }
    return null;
  };

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      {...rest}
    >
      {iconPosition === 'left' && renderIcon()}
      <span className="jg-button__text">{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'ghost', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string
};

export default Button;
