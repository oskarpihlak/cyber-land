import React, { Component } from 'react';
import './CypherCore.scss';
import { connect } from 'react-redux';
import { OTP, SHA2, MD5 } from '../../actions/types';
import PropTypes from 'prop-types';
const crypto = require('crypto');
const sha512 = require('js-sha512');

class CypherCore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      key: null,
      result: {
        elapsed:'',
        str:'',
      },
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      loading: false
    };
  }

  updateCryptData(element) {
    this.setState({
      ...this.state,
      [element]: document.querySelector(`#cryption-${element}`).value.toLowerCase(),
    });
  }

  chooseCription() {
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
    if (this.state.message && this.state.key) {
      if (this.props.optEncrypt) {
        if ((this.state.message.length === this.state.key.length) && this.state.message.length > 0) {
          let encryptedMessage = '';
          for (let i = 0; i < this.state.message.length; i++) {
            const newCharCode = (this.state.alphabet.indexOf(this.state.message[i]) + this.state.alphabet.indexOf(this.state.key[i])) % 26;
            encryptedMessage += this.state.alphabet[newCharCode];
          }
          this.setState({ ...this.state, result: {str:encryptedMessage, elapsed: null}});
        }
      } else {
        let decryptedMessage = '';
        for (let i = 0; i < this.state.message.length; i++) {
          let newCharCode = (this.state.alphabet.indexOf(this.state.message[i]) - this.state.alphabet.indexOf(this.state.key[i]));
          if (newCharCode < 0) newCharCode += 26;
          decryptedMessage += this.state.alphabet[newCharCode % 26];
        }
        this.setState({ ...this.state, result: {str:decryptedMessage, elapsed: null }});
      }
    } else {
      this.setState({ ...this.state, result: {str:'INVALID REQUEST', elapsed: null }});
    }
  }

  sha2Encription() {
    this.setState({...this.state, result: {str: btoa(sha512('hello')), elapsed: null}});
  }

  md5Encription() {
    if (this.props.optEncrypt) {
      const md5 = crypto.createHash('md5').update(this.state.message).digest('hex', this.state.message);
      this.setState({...this.state, result: {str:md5, elapsed: null }});
    } else {
      this.setState({...this.state, result: {str:'', elapsed: null}, loading:true});
      fetch(`/api/md5/decrypt/${this.state.message}`, {method:'POST'}).then(response =>{
        return response.json();
      }).then(data=>{
          console.log(data);
        this.setState({...this.state, result: {str:data.str, elapsed: data.elapsed+"s"}, loading: false});
      }).catch(error => {
        console.log(error.toString());
        console.log(JSON.stringify(error));
        this.setState({...this.state, result: {str:'ERROR!', elapsed: null }, loading: false});
      })
      }
  }

  render() {
    return (
      <section className='description-grid'>
        <div className='description-grid__item--1'>
          <div className='description-grid__img'/>
        </div>
        <div className='description-grid__item--2'>
          <p className='cryption__mode'>{this.props.cryptionType} {this.props.cryptionType === OTP || this.props.cryptionType === MD5 ? ' - '
            + (this.props.optEncrypt ? 'encrypt' : 'decrypt') : null}</p>
          <input id='cryption-message' className='description-grid__message' placeholder='Cryption message' type='text'
            onChange={() => {this.updateCryptData('message');}}/>
          {this.props.cryptionType === OTP ? (
            <input id='cryption-key' className='description-grid__key' placeholder='Cryption key' type='text'
              onChange={() => {this.updateCryptData('key');}}/>) : null}
          <button className='btn__execute' onClick={() => {this.chooseCription();}}>
              Execute
          </button>
          <div className='cryption-result'>
            {console.log(this.state.result)}
            {this.state.loading ? (<div className="lds-ripple"><div> </div><div> </div></div>) : null}
            {this.props.cryptionType === MD5 && !this.props.optEncrypt ? (
                <p>{this.state.result.elapsed}<br/>{this.state.result.str}</p>)
                : (<p>{this.state.result.str}</p>)}
          </div>
        </div>
      </section>
    );
  }
}

CypherCore.propTypes = {
  optEncrypt: PropTypes.bool,
  cryptionType: PropTypes.any,
};

const mapStateToProps = state => ({
  optEncrypt: state.encrypt.optEncrypt,
  cryptionType: state.encrypt.cryptionType,
});

export default connect(mapStateToProps)(CypherCore);
