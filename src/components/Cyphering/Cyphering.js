import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';
import { changeCryption, initialState } from '../../actions/postActions';

import './Cyphering.scss';

class Cyphering extends Component {
  componentWillMount() {
    this.props.initialState();
    this.props.changeCryption(this.props.encrypt);
  }

  render() {
    console.log(this.props);
    return (
      <div className='homes'>
        <div className='home'>
          <img src={require('../../assets/images/cypto1.jpg')} alt='House1' className='home__img'/>

          <h5 className='home__name'>OPT</h5>
          <div className='home__location'>
            <p> encryption technique that cannot be cracked, but requires the use of a one-time pre-shared
              key the same size as, or longer than, the message being sent.</p>
          </div>
          <div className='toggle-cryption'>
            <Toggle
              defaultChecked={this.props.encrypt}
              icons={{
                checked: null,
                unchecked: null,
              }}
              onChange={() => this.props.changeCryption(this.props.encrypt)}/>
            <span className='crypt-state'>{this.props.encrypt ? 'Encript' : 'Decrypt'}</span>
          </div>
          <button className='btn home__btn'>Execute</button>
        </div>
        <div className='home'>
          <img src={require('../../assets/images/crypto2.jpg')} alt='House1' className='home__img'/>
          <h5 className='home__name'>SHA-2</h5>
          <div className='home__location'>
            a set of cryptographic hash functions designed by the United States National Security Agency
            (NSA). They are built using the Merkle–Damgård structure, from a one-way compression function
            itself built using the Davies–Meyer structure from a (classified) specialized block cipher.
          </div>
          <button className='btn home__btn'>Execute</button>
        </div>
        <div className='home'>
          <img src={require('../../assets/images/crypto3.jpg')} alt='MD5' className='home__img'/>
          <h5 className='home__name'>MD5</h5>
          <p className='home__location'>
            widely used hash function producing a 128-bit hash value. Although MD5 was initially designed to
            be used as a cryptographic hash function, it has been found to suffer from extensive
            vulnerabilities. It can still be used as a checksum to verify data integrity, but only against
            unintentional corruption.
          </p>
          <button className='btn home__btn'>Execute</button>
        </div>
      </div>
    );
  }
}

Cyphering.propTypes = {
  changeCryption: PropTypes.func.isRequired,
  initialState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  encrypt: state.encrypt.encrypt,
});

export default connect(mapStateToProps, { changeCryption, initialState })(Cyphering);
