import types from '../action_types';

const initialState = {
  data:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ON_SEND_DATA_TO_DROP_DOWN:
      const payload = action.payload;
      const {data} = payload;
      return {
        ...state,
        data,
      }
  }
  return state;
}
