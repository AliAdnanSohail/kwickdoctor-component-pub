import css from 'styled-jsx/css';

export default css`
  .fieldset,
  .legend {
    padding: 0;
  }

  .stars {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-column-gap: 12px;
  }

  .star {
    display: grid;

    cursor: pointer;

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
  }
`;
