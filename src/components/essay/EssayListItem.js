import React from "react";
import userStore from "../../stores/userStore.js";

class EssayListItem extends React.Component {
  constructor( context, props ){
    super( context, props );
  }
  componentDidMount(){

  }
  render(){
    var userId = this.props.children.user_id;
    return(
      <tr>
        <td>{ this.props.children.id }</td>
        <td>{ this.fetchUser( userId ) }</td>
        <td>{ this.props.children.pickup_f? "pickup" : "essay"}</td>
        <td>{ this.props.children.title }</td>
        <td>{ this.props.children.text }</td>
        <td>{ this.props.children.created_at }</td>
      </tr>
    )
  }
  fetchUser( id ){
    var user = userStore.getfindUser(id);
    if( user ){
      return user.name
    }
    return "not found";
  }
}

export default EssayListItem;