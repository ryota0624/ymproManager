import React from "react";
import essayActions from "../../actions/essayActions.js";
import essayStore from "../../stores/essayStore.js";
import EssayList from "../../components/essay/EssayList.js";
var changefunc;

class EssayPage extends React.Component {
  constructor( context, props ){
    super( context, props );
    this.state = {
      essays: []
    }
  }
  componentDidMount() {
    changefunc = this.onChange.bind( this );
    essayStore.addChangeListener( changefunc );
    essayActions.fetch();
  }
  componentWillUnmount() {
    essayStore.removeChangeListener( changefunc );
  }
  render(){
    return(
      <EssayList essays={ this.state.essays } />
    )
  }
  onChange(){
    this.setState( { essays: essayStore.getEssays()});
    console.log(this.state.essays);
  }
}

export default EssayPage;