import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
.videoPlayer_container{
  position: absolute;
}

button {
  margin: 0 3px 10px 0;
  padding-left: 2px;
  padding-right: 2px;
  width: 99px;
}

button:last-of-type {
  margin: 0;
}


video {
  height: 40%;
  vertical-align: top;
  width: calc(40em - 10px);
}


video:last-of-type {
  margin: 0 0 20px 0;
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
