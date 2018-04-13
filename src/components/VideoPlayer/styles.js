import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`

.videoPlayer_container{
  position: absolute;
}

.videoPlayer_controls{
  position: absolute;
  bottom: 20px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  z-index: 2147483647;
}

button {
  margin: 0 3px 10px 0;
  padding-left: 2px;
  padding-right: 2px;
  width: 99px;
}



video {
  height: 100%;
  vertical-align: top;
  z-index: 0;

}
video::-webkit-media-controls-enclosure {
  display:none !important;
}

@media screen and (max-width: 500px) {
  button {
    font-size: 0.8em;
    width: calc(33% - 5px);
  }
}

@media screen and (max-width: 720px) {
  video {
    height: calc((50vw - 48px) * 3 / 4);
    margin: 0 10px 10px 0;
    width: calc(50vw - 48px);
  }

  
}
`;
