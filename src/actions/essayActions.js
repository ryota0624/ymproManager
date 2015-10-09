import Dispatcher from "../dispatcher/dispatcher.js";
import Constants from "../constants/essayConstants.js";

const essayActions = {
  fetch: () => {
    fetchEssays();
  }
};

function fetchEssays(){
  $.ajax({
    url: "http://localhost:3000/api/essay",
    dataType: "json",
    success: ( data ) => {
      Dispatcher.dispatch({
        actionType: Constants.FETCH_ESSAYS,
        essays: data
      });
    },
    error: ( error ) => {
      console.log( error );
      console.log( "fetch error" );
    }
  })
}

export default essayActions;