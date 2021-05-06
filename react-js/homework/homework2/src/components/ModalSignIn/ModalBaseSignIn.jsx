import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../ModalBase/ModalBase.scss';
import './sign-in.styles.scss';
import FormInput from './form-input.component'
import SubmitButton from './submit-button.component'

class ModalBaseSignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
}

handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
}

handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
}

  render() {
    const {
      header,
      bgColorHeader,
      bgColorBody,
      bgColorFooter,
      closeButton,
      onClose
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
            <form onSubmit={this.handleSubmit} className="sign-in">
              <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='username or email' />
              <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password' />
            </form>
          </div>
          <div
            className="modal-footer"
            style={{ backgroundColor: bgColorFooter }}
          >
            <form onSubmit={this.handleSubmit}>
              <SubmitButton onClick={onClose} type='submit'>Login</SubmitButton>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalBaseSignIn;

ModalBaseSignIn.propTypes = {

  header: PropTypes.string,
  bgColorHeader: PropTypes.string,
  bgColorBody: PropTypes.string,
  bgColorFooter: PropTypes.string,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func,
}