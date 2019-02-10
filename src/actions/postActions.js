import { FETCH_POSTS, NEW_POST, CHANGE_CRYPTION, INITIAL_STATE } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
export const changeCryption = cryptionState => (dispatch) => {
  console.log(`${cryptionState} => ${!cryptionState}`);
  dispatch({
    type: CHANGE_CRYPTION,
    payload: !cryptionState,
  });
};

export const initialState = () => dispatch => {
  dispatch({
    type: INITIAL_STATE,
  });
};
