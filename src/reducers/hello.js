import { SAY_HELLO } from '../actions/hello';
export default function helloReducer(state = { username: "World !!!!!" }, action) {

  switch (action.type) {

    case SAY_HELLO:

      return Object.assign({}, state, {
        username: action.name
      });
    default:
      return state;

  }
}
