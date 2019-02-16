import { INITIAL_STATE, CHANGE_CRYPTION, OTP, CHANGE_CRYPTION_TYPE } from '../actions/types';

const initialState = {
  optEncrypt: true,
  cryptionType: OTP,
};

export default function(state = initialState, action) {
  switch (action.type) {
  case CHANGE_CRYPTION:
    return {
      ...state,
      optEncrypt: action.payload,
    };
  case CHANGE_CRYPTION_TYPE:
    return {
      ...state,
      cryptionType: action.payload,
    };
  case INITIAL_STATE:
    return state;
  default:
    return state;
  }
}
