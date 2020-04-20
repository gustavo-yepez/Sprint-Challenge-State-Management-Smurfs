import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getSmurfs =() => dispatch => {
    dispatch({type: FETCH_DATA_START});

    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
        dispatch({ 
            type: FETCH_DATA_SUCCESS, payload: res.data 
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: `${err.response.status} ${err.response.data}`
        });
    });

}

export const addSmurf = newSmurf => dispatch => {

    dispatch({ type: POST_DATA_START });
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
        console.log("Post", res);
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
        .catch(err => {
        console.log(err);
        dispatch({ type: POST_DATA_FAILURE, payload: err });
    });
};