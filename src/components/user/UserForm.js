import React from "react";
import TextInput from "../formParts/TextInput.js";
import Checkbox from "../formParts/Checkbox.js";
import Selectbox from "../formParts/Selectbox.js";
import UserClass from "./User.js";

var gender = [
  {
    value: 0,
    text: "man"
  },
  {
    value: 1,
    text: "women"
  }
];


class UserForm extends React.Component {
  constructor( context, props ){
    super( context, props );
    this.state ={
      newUser: new UserClass()
    }
  }
  render() {
    return (
      <form>
        <label htmlFor="checkbox">admin:</label>
        <Checkbox id="checkbox"
                  data={ this.state.newUser.admin }
                  changehandle={this.adminCheck.bind(this)}/>
        <label htmlFor="nameinput">name:</label>
        <TextInput id="nameinput"
                   data={ this.state.newUser.name }
                   changehandle={this.nameInput.bind(this)} />
        <label htmlFor="password">password:</label>
        <TextInput id="password"
                   data={ this.state.newUser.password}
                   changehandle={this.passInput.bind(this)}
                   typePass="true" />
        <label htmlFor="passconf">passconf:</label>
        <TextInput id="passconf"
                   data={ this.state.newUser.password_confirmation }
                   typePass="true"
                   changehandle={this.passconfInput.bind(this)}/>
        <label htmlFor="selectbox">gender:</label>
        <Selectbox id="selectbox"
                   options={ gender }
                   changehandle={this.genderSelect.bind(this)} />
        <button onClick={ this.addHandle.bind(this) }>add</button>
      </form>
    )
  }
  addHandle() {
    this.props.add(this.state.newUser);
  }

  nameInput( name ){
    var newUser = this.state.newUser;
    newUser.name = name;
    this.setUser( newUser );
  }
  passInput( pass ){
    var newUser = this.state.newUser;
    newUser.password = pass;
    this.setUser( newUser );
  }
  passconfInput( pass ){
    var newUser = this.state.newUser;
    newUser.password_confirmation = pass;
    this.setUser( newUser );
  }
  adminCheck( admin ){
    var newUser = this.state.newUser;
    newUser.admin = admin;
    this.setUser( newUser );
  }
  genderSelect( value ){
    var newUser = this.state.newUser;
    newUser.gender = value;
    this.setUser( newUser );
  }
  setUser(newUser){
    console.log(newUser)
    this.setState( {newUser: newUser} );
  }
}

export default UserForm;