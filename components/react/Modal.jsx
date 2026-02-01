/**
 * Reusable Modal Component
 * 
 * @description An accessible modal dialog component
 * @author Jackson Fall
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlay = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = ''
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      
      // Focus first focusable element
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements?.length > 0) {
        focusableElements[0].focus();
      }
    } else {
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (closeOnOverlay && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalClasses = [
    'jg-modal__content',
    `jg-modal__content--${size}`,
    className
  ].filter(Boolean).join(' ');

  const modalContent = (
    <div className="jg-modal" onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {(title || showCloseButton) && (
          <div className="jg-modal__header">
            {title && <h2 id="modal-title" className="jg-modal__title">{title}</h2>}
            {showCloseButton && (
              <button
                className="jg-modal__close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}
        
        <div className="jg-modal__body">
          {children}
        </div>
        
        {footer && (
          <div className="jg-modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
  closeOnOverlay: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  className: PropTypes.string
};

export default Modal;
