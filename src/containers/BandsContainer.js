import React, { Component } from 'react';
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map(band => <li>{band.name}</li>)

  render() {
    console.log(this.props.bands);
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ol>{this.renderBands()}</ol>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (input) => dispatch({ type: "ADD_BAND", payload: input })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
