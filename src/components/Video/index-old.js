import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import css from 'styled-jsx/css';

import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
    const video = (<video controls={false} />);
  }


  render() {
    return (
      <div className="videoContainer">
        <video controls={false} >
          <source src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4" type="video/mp4" />
          <source src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.ogg" type="video/ogg" />
        </video>
        <div id="videoControls">
          <button id="play" title="Play"> <div><div> </button>

          

         
          <a href="http://www.tutsplus.com"><img src="http://tutsplus.s3.amazonaws.com/tutspremium/web-development/103_html5VideoPlayer/images/tuts_logo.png" alt="Tuts" id="video_tutsLogo" /></a>
        </div>
      </div>
    );
  }
}
