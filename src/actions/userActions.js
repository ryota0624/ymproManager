import Dispatcher from "../dispatcher/dispatcher.js";
import Constatns from "../constants/userConstants.js";

const userActions = {
  fetch: () => {
    fetchUsers();
  },
  add: ( user ) => {
    addUser( user );
  },
  delete: ( user ) => {
    deleteUser( user )
  },
  find: ( id ) => {
    findUser ( id )
  }
};

function fetchUsers() {
  $.ajax({
    url: "http://localhost:3000/api/user",
    dataType: "json",
    success: (data) => {
      Dispatcher.dispatch({
        actionType: Constatns.FETCH_USERS,
        users: data
      });
    },
    error: (error) => {
      console.log(error);
      console.log("fetch error");
    }
  })
}
function addUser( user ) {
  $.ajax({
    url: "http://localhost:3000/api/adduser",
    type: "post",
    dataType: "json",
    data: {
      name: user.name,
      password: user.password,
      password_confirmation: user.password_confirmation,
      admin: user.admin,
      gender: user.gender
    },
    success: (data) => {
      if (!data.error) {
        Dispatcher.dispatch({
          actionType: Constatns.ADD_USER,
          user: data
        });
      }
    },
    error: (error) => {
      console.log(error);
      console.log("add error");
    }
  })
}
function deleteUser( user ) {
  $.ajax({
    url: "http://localhost:3000/api/deleteuser",
    type: "post",
    dataType: "json",
    data: {
      id: user.id
    },
    success: (data) => {
      if (!data.error) {
        Dispatcher.dispatch({
          actionType: Constatns.DELETE_USER,
          user: data
        });
      }
    },
    error: (error) => {
      console.log(error);
      console.log("add error");
    }
  })
}

function findUser( id ){
  Dispatcher.dispatch({
    actionType: Constatns.FIND_USER,
    id: id
  });
}
export default userActions;