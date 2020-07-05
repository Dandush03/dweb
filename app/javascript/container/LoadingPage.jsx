import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: false,
      init: 0,
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    setTimeout(() => this.setState({
      init: 1,
      time: true,
    }), 3000);
  }

  render() {
    let loaded = true;
    const {
      props: { loadingData }, state: { time, init }, startTimer,
    } = this;

    if (init === 0) {
      startTimer();
    }

    Object.values(loadingData).forEach((val) => {
      if (val === false) {
        loaded = false;
      }
    });

    return (
      loaded && time ? null : <Loading />
    );
  }
}

Parallax.propTypes = {
  loadingData: PropTypes.objectOf(PropTypes.bool).isRequired,
};

const structeredSelector = createStructuredSelector({
  loadingData: (state) => state.loadingData,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Parallax);
