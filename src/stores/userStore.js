import Dispatcher from "../dispatcher/dispatcher.js";
import Constants from "../constants/userConstants.js";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

var _users = [];

function fetchUsers( users ) {
  _users = users;
}

function addUser( user ) {
  _users.push( user );
}
function deleteUser( user ){
  var arrNum = findUser( user.id );
  if (arrNum !== null) {
    _users.splice(arrNum,1);
  } else {
    console.log("cant find user");
  }
}
function findUserNo( id ){
  var userNum = _users.length;
  for( var i = 0; i < userNum ; i++ ){
    if( _users[i].id === id ){
      return i;
    }
  }
  return null;
}

function find( id ){
  var userNum = _users.length;
  for( var i = 0; i < userNum ; i++ ){
    if( _users[i].id === id ){
      return _users[i];
    }
  }
  return null;
}

class ScheduleStore extends EventEmitter {
  constructor() {
    super();
    Dispatcher.register(this.handler.bind(this));
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback );
  }
  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback );
  }
  getUsers() {
    return _users;
  }
  getfindUser( id ) {
    return find( id );
  }
  handler( action ){
    switch  ( action.actionType ){
      case Constants.FETCH_USERS:
        fetchUsers( action.users );
        this.emitChange();
        break;
      case Constants.ADD_USER:
        addUser( action.user );
        this.emitChange();
        break;
      case Constants.DELETE_USER:
        deleteUser( action.user );
        this.emitChange();
        break;
      case Constants.FIND_USER:
        findUser( action.id );
        this.emitChange();
      default:
    }
  }
}

const scheduleStore = new ScheduleStore();
export default scheduleStore;