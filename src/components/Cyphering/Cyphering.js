import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';
import { changeCryption, initialState, changeCryptionType } from '../../actions/postActions';
import { OTP, SHA2, MD5 } from '../../actions/types';

import './Cyphering.scss';

class Cyphering extends Component {
  componentWillMount() {
    this.props.initialState();
  }

  render() {
    console.log(this.props);
    return (
      <div className='homes'>
        <div className='home'>
          <img src={require('../../assets/images/cypto1.jpg')} alt='House1' className='home__img'/>

          <h5 className='home__name'>OPT</h5>
          <div className='home__location'>
            <p>Encryption technique that cannot be cracked, but requires the use of a one-time pre-shared
              key the same size as, or longer than, the message being sent.</p>
          </div>
          <div className='toggle-cryption'>
            <Toggle
              defaultChecked={this.props.optEncrypt}
              icons={{
                checked: null,
                unchecked: null,
              }}
              onChange={() => this.props.changeCryption(this.props.optEncrypt)}/>
            <span className='crypt-state'>{this.props.optEncrypt ? 'Encript' : 'Decrypt'}</span>
          </div>
          <button className={'btn home__btn ' + (this.props.cryptionType === OTP ? 'home__btn--selected' : null)}
            onClick={() => {this.props.changeCryptionType(OTP);}}>
            {this.props.cryptionType === OTP ? 'Selected' : 'Choose'}
          </button>
        </div>
        <div className='home'>
          <img src={require('../../assets/images/crypto2.jpg')} alt='House1' className='home__img'/>
          <h5 className='home__name'>SHA-2</h5>
          <div className='home__location'>
            A set of cryptographic hash functions designed by the United States National Security Agency
            (NSA). They are built using the Merkle–Damgård structure, from a one-way compression function
            itself built using the Davies–Meyer structure from a (classified) specialized block cipher.
          </div>
          <button className={'btn home__btn ' + (this.props.cryptionType === SHA2 ? 'home__btn--selected' : null)}
            onClick={() => {this.props.changeCryptionType(SHA2);}}>
            {this.props.cryptionType === SHA2 ? 'Selected' : 'Choose'}
          </button>
        </div>
        <div className='home'>
          <img src={require('../../assets/images/crypto3.jpg')} alt='MD5' className='home__img'/>
          <h5 className='home__name'>MD5</h5>
          <p className='home__location'>
            Widely used hash function producing a 128-bit hash value. Although MD5 was initially designed to
            be used as a cryptographic hash function, it has been found to suffer from extensive
            vulnerabilities. It can still be used as a checksum to verify data integrity, but only against
            unintentional corruption.
          </p>
          <button className={'btn home__btn ' + (this.props.cryptionType === MD5 ? 'home__btn--selected' : null)}
            onClick={() => {this.props.changeCryptionType(MD5);}}>
            {this.props.cryptionType === MD5 ? 'Selected' : 'Choose'}
          </button>
        </div>
      </div>
    );
  }
}

Cyphering.propTypes = {
  changeCryptionType: PropTypes.func.isRequired,
  changeCryption: PropTypes.func.isRequired,
  initialState: PropTypes.func.isRequired,
  optEncrypt: PropTypes.bool,
  cryptionType: PropTypes.any,
};

const mapStateToProps = state => ({
  optEncrypt: state.encrypt.optEncrypt,
  cryptionType: state.encrypt.cryptionType,
});

export default connect(mapStateToProps, { changeCryption, initialState, changeCryptionType })(Cyphering);
