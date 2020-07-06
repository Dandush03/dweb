import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { addItem, itemLoaded } from '../actions/loadingItem';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.loadedItem = this.loadedItem.bind(this);
  }

  loadedItem() {
    const { props: { itemLoaded, loadItem, loadingData } } = this;

    if (loadingData[loadItem] === false) {
      itemLoaded({ [loadItem]: true });
    }
  }

  render() {
    const {
      props: {
        imgUrl, loadItem,
        loadingData, addItem,
      }, loadedItem,
    } = this;

    const img = new Image();
    img.src = imgUrl;
    img.onload = loadedItem;

    const Div = styled.div`&:before {  background-image: url(${img.src}); } `;

    if (loadingData[loadItem] === undefined) {
      addItem({ [loadItem]: false });
    }

    return (
      <Div />
    );
  }
}

Parallax.propTypes = {
  addItem: PropTypes.func.isRequired,
  itemLoaded: PropTypes.func.isRequired,
  loadingData: PropTypes.objectOf(PropTypes.bool).isRequired,
  imgUrl: PropTypes.string.isRequired,
  loadItem: PropTypes.string.isRequired,
};

const structeredSelector = createStructuredSelector({
  loadingData: (state) => state.loadingData,
});

const mapDispatchToProps = { addItem, itemLoaded };

export default connect(structeredSelector, mapDispatchToProps)(Parallax);
