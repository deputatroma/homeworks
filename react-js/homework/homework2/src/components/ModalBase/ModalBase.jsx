import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ModalBase.scss';


class ModalBase extends Component {
  render() {
    const {
      header,
      text,
      textConfirm,
      bgColorHeader,
      bgColorBody,
      bgColorFooter,
      closeButton,
      bgInfo,
      onClose,
      onConfirm
    } = this.props;

    return (
      <div
        className="wrapper"
        onClick={onClose}
      >
        <div
          className="modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="modal-header"
            style={{ backgroundColor: bgColorHeader }}
          >
            <h5 className="modal-title">
              {header}
            </h5>
            {closeButton &&
              <span
                className="close"
                onClick={onClose}
              >&times;</span>
            }
          </div>
          <div
            className="modal-body"
            style={{ backgroundColor: bgColorBody }}
          >
            <p className="text-modal">
              {text}
            </p>
            <p>
              {textConfirm}
            </p>
          </div>
          <div
            className="modal-footer"
            style={{ backgroundColor: bgColorFooter }}
          >
            <Button
              onClick={onClose}
              className="btn btn-modal"
              text='No'
              style={{ backgroundColor: bgInfo }}
            />
            <Button
              onClick={onConfirm}
              className="btn btn-modal"
              text='Yes'
              style={{ backgroundColor: bgInfo }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ModalBase;

ModalBase.propTypes = {

  header: PropTypes.string,
  text: PropTypes.string,
  textConfirm: PropTypes.string,
  bgColorHeader: PropTypes.string,
  bgColorBody: PropTypes.string,
  bgColorFooter: PropTypes.string,
  closeButton: PropTypes.bool,
  bgInfo: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}