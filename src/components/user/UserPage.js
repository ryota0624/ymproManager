import React from "react";
import userActions from "../../actions/userActions.js";
import userStore from "../../stores/userStore.js";
import UserList from "./UserList.js";
import UserForm from  "./UserForm.js";
var changefunc;


class UserPage extends React.Component {
  constructor ( context, props ){
    super ( context, props );
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    changefunc = this.onChange.bind(this);
    userStore.addChangeListener(changefunc);
    userActions.fetch();
  }
  componentWillUnmount() {
    userStore.removeChangeListener(changefunc);
  }
  render() {
    console.log(this)
    return (
      <div>
        <h2>user page</h2>
        <UserForm add={this.addHandle.bind(this)}/>
        <UserList list={this.state.users}
                  delete={this.deleteHandle.bind(this)}/>
      </div>
    )
  }
  addHandle( newUser ){
    userActions.add(newUser);
  }
  deleteHandle( user ){
    userActions.delete( user );
  }
  onChange() {
    this.setState({users: userStore.getUsers()});
    console.log(this.state.users);
  }
}

export default UserPage;