import css from 'styled-jsx/css';

export default css`
  .card-picker {
    text-align: center;

    .card {
      min-width: 140px;
      max-width: 240px;
      height: 100%;
      border: 1px solid #eff0f4;
      border-radius: 25px;
      padding: 20px 10px;
      margin: 10px;
      float: left;

      &--active {
        border: 1px solid #0c97f9;
      }

      input {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0 !important;
        border: 0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden;
      }

      img {
        max-width: 100%;
        max-height: 80%;
      }

      .content {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 0px;
      }
    }
  }
`;
