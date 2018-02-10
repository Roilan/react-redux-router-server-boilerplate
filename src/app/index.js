import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMobile: state.device.isMobile
  }
}

export default connect(mapStateToProps)(App);
