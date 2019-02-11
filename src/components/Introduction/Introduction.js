import React, { Component } from 'react';
import './Introduction.scss';
import { connect } from 'react-redux';
import { OTP, SHA2, MD5 } from '../../actions/types';
import PropTypes from 'prop-types';
const crypto = require('crypto');
const fs = require('fs');

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      key: null,
      result: null,
    };
  }

  updateCryptData(element) {
    this.setState({
      ...this.state,
      [element]: document.querySelector(`#cryption-${element}`).value,
    });
    console.log(`state update ${element}`);
  }

  chooseCription() {
    console.log(this.state);
    switch (this.props.cryptionType) {
    case OTP:
      this.otpCryption();
      break;
    case SHA2:
      this.sha2Encription();
      break;
    case MD5:
      this.md5Encription();
      break;
    default:
      return null;
    }
    return null;
  }

  otpCryption() {
    if (this.props.optEncrypt) {
      if ((this.state.message.length === this.state.key.length) && this.state.message.length > 0) {
        let encryptedMessage = '';
        for (let i = 0; i < this.state.message.length; i++) {
          encryptedMessage += (String.fromCharCode(((this.state.message.charCodeAt(i) - 97) + (this.state.key.charCodeAt(i) - 97) % 26) + 97));
        }
        this.setState({...this.state, result: encryptedMessage});
      }
    } else {
      let decryptedMessage = '';
      for (let i = 0; i < this.state.message.length; i++) {
        decryptedMessage += (String.fromCharCode(((this.state.message.charCodeAt(i) - 97) - (this.state.key.charCodeAt(i) - 97) % 26) + 97));
      }
      this.setState({...this.state, result: decryptedMessage});
    }
  }

  sha2Encription() {
    const key = crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
    this.setState({...this.state, result: key.toString('base64')});
    console.log(this.state);
  }

  md5Encription() {
    const md5 = crypto.createHash('md5').update(this.state.message).digest('hex', this.state.message);
    this.setState({...this.state, result: md5});
  }

  render() {
    return (
      <section className='description-grid'>
        <div className='description-grid__item--1'>
          <div className='description-grid__img'/>
        </div>
        <div className='description-grid__item--2'>
          <p className='cryption__mode'>{this.props.cryptionType} {this.props.cryptionType === OTP ? ' - '
            + (this.props.optEncrypt ? 'encrypt' : 'decrypt') : null}</p>
          <input id='cryption-message' className='description-grid__message' placeholder='Cryption message' type='text'
            onChange={() => {this.updateCryptData('message');}}/>
          {this.props.cryptionType === OTP ? (
            <input id='cryption-key' className='description-grid__key' placeholder='Cryption key' type='text'
              onChange={() => {this.updateCryptData('key');}}/>) : null}
          <button className='btn__execute' onClick={() => {this.chooseCription();}}>
              Execute
          </button>
          <p className='cryption-result'>{this.state.result}</p>
        </div>
      </section>
    );
  }
}

Introduction.propTypes = {
  optEncrypt: PropTypes.bool,
  cryptionType: PropTypes.any,
};

const mapStateToProps = state => ({
  optEncrypt: state.encrypt.optEncrypt,
  cryptionType: state.encrypt.cryptionType,
});

export default connect(mapStateToProps)(Introduction);
