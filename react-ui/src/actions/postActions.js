import { CHANGE_CRYPTION, INITIAL_STATE, CHANGE_CRYPTION_TYPE } from './types';

export const changeCryption = cryptionState => (dispatch) => {
  console.log(`${cryptionState} => ${!cryptionState}`);
  dispatch({
    type: CHANGE_CRYPTION,
    payload: !cryptionState,
  });
};

export const changeCryptionType = cryptionType => dispatch => {
  dispatch({
    type: CHANGE_CRYPTION_TYPE,
    payload: cryptionType,
  });
};

export const initialState = () => dispatch => {
  dispatch({
    type: INITIAL_STATE,
  });
};
