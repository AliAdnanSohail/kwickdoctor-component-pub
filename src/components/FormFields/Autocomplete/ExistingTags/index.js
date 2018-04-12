import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from 'grommet/components/icons/base/Add';

import KEYS from '../../../utils/keys';
import Suggestions from './../Suggestions';

import styles from './styles';

export default class ExistingTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      selectedIndex: -1,
      selectionMode: false,
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBlur);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBlur);
  }

  handleClick = () => {
    this.setState({
      selectedIndex: -1,
      selectionMode: false,
      isFocused: !this.state.isFocused,
    });
  };

  handleBlur = () => {
    this.setState({
      isFocused: false,
    });
  };

  handleKeyDown = (e) => {
    const { selectedIndex, selectionMode } = this.state;
    const { existingTags, handleClick } = this.props;

    if (e.keyCode === KEYS.ENTER && selectionMode) {
      this.setState({
        selectionMode: false,
      });
      handleClick(selectedIndex);
    }

    if (e.keyCode === KEYS.UP_ARROW) {
      e.preventDefault();
      this.setState({
        selectedIndex: selectedIndex <= 0 ? existingTags.length - 1 : selectedIndex - 1,
        selectionMode: true,
      });
    }

    if (e.keyCode === KEYS.DOWN_ARROW) {
      e.preventDefault();
      this.setState({
        selectedIndex: existingTags.length === 0 ? -1 : (selectedIndex + 1) % existingTags.length,
        selectionMode: true,
      });
    }
  };

  render() {
    const { isFocused, selectedIndex } = this.state;
    const { handleClick, existingTags } = this.props;

    return (
      !!existingTags.length && (
        <li className="tag-input__add-existing-tag">
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown}>
            <AddIcon />
            Add existing tag
          </button>
          <Suggestions
            isFocused={isFocused}
            selected={selectedIndex}
            onClick={handleClick}
            items={existingTags}
          />
          <style jsx>{styles}</style>
        </li>
      )
    );
  }
}

ExistingTags.propTypes = {
  existingTags: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
