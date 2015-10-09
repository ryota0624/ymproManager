import React from "react";
import UserListItem from "./UserListItem.js";
import { Table } from "react-bootstrap";

class UserList extends React.Component {
  constructor(context, props) {
    super(context, props)
  }

  render() {
    var list = this.props.list.map((item) => {
      return (<UserListItem key={item.id}
                            delete={this.deletehandle.bind(this)
                            }>{ item }</UserListItem>)
    });
    return (
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>#</th>
            <th>admin</th>
            <th>name</th>
            <th>gender</th>
            <th>createDate</th>
            <th>DELETE</th>
          </tr>
          </thead>
          <tbody>
          { list }
          </tbody>
        </Table>
    )
  }
  deletehandle( user ){
    this.props.delete( user );
  }
}

export default UserList;