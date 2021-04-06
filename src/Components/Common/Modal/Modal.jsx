import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

/* eslint react/prop-types: 1 */

// * используем портал
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    toggleModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseKeyEvent);
  }

  onCloseKeyEvent = e => {
    const { toggleModal } = this.props;
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  onCloseOverlay = e => {
    const { toggleModal } = this.props;
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={style.overlay} onClick={this.onCloseOverlay}>
        <div className={style.modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseKeyEvent);
  }
}
