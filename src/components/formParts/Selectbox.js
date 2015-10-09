import React from "react";

class Selectbox extends React.Component {
  constructor(context, props) {
    super(context, props);
  }

  render() {
    var options = this.props.options.map((item) => {
      return (
        <option key={ item.value }
                value={ item.value }>{ item.text }</option>
      )
    });
    return (
      <select onChange={ this.changehandle.bind(this)}>
        { options }
      </select>
    )
  }
  changehandle( e ){
    this.props.changehandle( parseInt( e.target.value ) );
  }
}

export default Selectbox;