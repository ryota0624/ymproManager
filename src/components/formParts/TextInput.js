import React from "react";

class TextInput extends React.Component {
  constructor( context, props ){
    super( context, props )
  }
  render(){
    return(
      <input type={ !this.props.typePass? "text": "password"}
             value={ this.props.data }
             onChange={this.changeHandle.bind(this)} />
    )
  }
  changeHandle( e ){
    this.props.changehandle(e.target.value);
  }
}

export default TextInput;