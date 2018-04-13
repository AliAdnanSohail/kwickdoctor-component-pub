import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`

.video_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.video_controls {
  position: absolute;
  top: 420px;
  display: flex;
  justify-content: center;
  width: 100%;
}

p.borderBelow {
  margin: 0 0 20px 0;
  padding: 0 0 20px 0;
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

  video#gumVideo {
    margin: 0 10px 10px 0;
  }
}
`;
