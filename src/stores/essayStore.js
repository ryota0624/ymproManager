import Dispatcher from "../dispatcher/dispatcher.js";
import Constants from "../constants/essayConstants.js";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

var _essays = [];

function fetchEssays( essays ) {
  _essays = essays;
}

class EssayStore extends EventEmitter {
  constructor() {
    super();
    Dispatcher.register( this.handler.bind(this) );
  }
  emitChange() {
    this.emit( CHANGE_EVENT );
  }
  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback );
  }
  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback );
  }
  getEssays(){
    return _essays;
  }
  handler( action ){
    switch ( action.actionType ){
      case Constants.FETCH_ESSAYS:
        fetchEssays( action.essays );
        this.emitChange();
        break;
      default:
    }
  }
}

const essayStore = new EssayStore();
export default essayStore;