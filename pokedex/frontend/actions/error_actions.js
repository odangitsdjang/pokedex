import APIUtil from "../util/api_util";

// export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// export const clearErrors = () => ({
//   type: CLEAR_ERRORS
// });

// export const receiveError = (error) => ({
//   type: RECEIVE_ERROR,
//   error
// });
