import React from "react";
import { Table } from "react-bootstrap";
import EssayListItem from "./EssayListItem.js";

class EssayList extends React.Component {
  constructor(context, props) {
    super(context, props);
  }

  render() {
    var list = this.props.essays.map((item) => {
      return(
        <EssayListItem key={item.id}>{ item }</EssayListItem>
      )
    });
    return (
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>userId</th>
          <th>pick-up</th>
          <th>title</th>
          <th>text</th>
          <th>createDate</th>
        </tr>
        </thead>
        <tbody>
        { list }
        </tbody>
      </Table>
    )
  }
}

export default EssayList;
