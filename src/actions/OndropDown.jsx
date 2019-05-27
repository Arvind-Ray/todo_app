import axios from 'axios';
import types from '../action_types';


export default () => (dispatch, getState) => {
  const url = ``;  //for base url just the demo to show the workflow of react-redux
  const body = {};
  axios.post(url, body)
    .then(res => {
      dispatch({type: types.ON_SEND_DATA_TO_DROP_DOWN, payload: res.data});
      const {data} = res.data;
    //   localStorage.setItem('shaadi data', JSON.stringify(data));
    })
    .catch(err => console.log("TODO: Handle error case in  Dropdown "));
}
