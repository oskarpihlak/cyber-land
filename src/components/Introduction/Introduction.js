import React, {Component} from 'react';
import './Introduction.scss';
import { connect } from 'react-redux';
import { OTP, SHA2, MD5 } from '../../actions/types';
import PropTypes from 'prop-types';

class Introduction extends Component {
  render() {
    console.log(this.props);
    return (
      <section className='description-grid'>
        <div className='description-grid__item--1'>
          <div className='description-grid__img' />
        </div>
        <div className='description-grid__item--2'>
          <p className='cryption__mode'>{this.props.cryptionType}</p>
          <input className='description-grid__message' placeholder='Cryption message' type='text'/>
          {this.props.cryptionType === OTP ? (<input className='description-grid__key' placeholder='Cryption key' type='text'/>) : null}
          <div className='btn__execute__container'>
            <button className='btn__execute'>
              Execute
            </button>
          </div>

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
