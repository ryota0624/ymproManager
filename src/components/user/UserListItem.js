import React from "react";

class UserListItem extends React.Component {
  constructor(context, props) {
    super(context, props);
  }
  render() {
    var user = this.props.children;
    return (
      <tr>
        <td>{ user.id }</td>
        <td>{ user.admin ? "root":"guest" }</td>
        <td>{ user.name }</td>
        <td>{ user.gender===0 ? "man": "women" }</td>
        <td>{ user.created_at }</td>
        <td><button onClick={this.delete.bind(this)}>delete</button></td>
      </tr>
    )
  }
  delete() {
    this.props.delete(this.props.children);
  }
}

export default UserListItem;