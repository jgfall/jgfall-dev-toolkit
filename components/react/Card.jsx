/**
 * Reusable Card Component
 * 
 * @description A flexible card component for content organization
 * @author Jackson Fall
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  children,
  title,
  subtitle,
  footer,
  image,
  imageAlt = '',
  variant = 'default',
  hoverable = false,
  clickable = false,
  onClick,
  className = '',
  ...rest
}) => {
  const baseClass = 'jg-card';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    hoverable && `${baseClass}--hoverable`,
    clickable && `${baseClass}--clickable`,
    className
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyPress = (e) => {
    if (clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={classes}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...rest}
    >
      {image && (
        <div className="jg-card__image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      
      {(title || subtitle) && (
        <div className="jg-card__header">
          {title && <h3 className="jg-card__title">{title}</h3>}
          {subtitle && <p className="jg-card__subtitle">{subtitle}</p>}
        </div>
      )}
      
      <div className="jg-card__body">
        {children}
      </div>
      
      {footer && (
        <div className="jg-card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  footer: PropTypes.node,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated', 'flat']),
  hoverable: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Card;
