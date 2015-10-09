import React from "react";

class Checkbox extends React.Component {
  constructor( context, props ) {
    super( context, props )
  }
  render(){
    return(
      <input type="checkbox"
             value={ this.props.data }
             onChange={ this.changehandle.bind(this) } />
    )
  }
  changehandle(e) {
    var admin = e.target.value === "true" ? false : true;
    this.props.changehandle(admin);
  }
}

export default  Checkbox;