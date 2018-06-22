import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import * as Ionicons from 'react-icons/lib/io';
import { withRouter } from 'react-router-dom';
import { withAccessibleFocusStyle } from '../../utils';

const IconWrapper = styled(withAccessibleFocusStyle(Flex))`
  font-size: 64px;
  margin: 24px;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
    color: pink;
  }
`;

class LinkIcon extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  };

  static defaultProps = {
    title: '',
    link: '/',
    icon: <Ionicons.IoIosStarOutline />,
  };

  buttonClicked = link => {
    this.props.history.push(link);
  }

  render() {
    const { title, link, icon } = this.props;
    return (
      <IconWrapper
        title={title}
        onClick={() => this.buttonClicked(link)}
        is="button"
        role="link"
        aria-label={title}
        tabIndex={0}
      >
        {icon}
      </IconWrapper>
    )
  }
}

export default withRouter(LinkIcon);
