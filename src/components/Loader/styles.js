import css from 'styled-jsx/css';

export default css`
  .loader-container {
    display: flex;
    justify-content: space-between;
    text-align: center;
    :global(svg) {
      margin: 0 auto;
      :global(circle, path) {
        stroke: rgb(12, 151, 249)!important;
      }
    }
  }
`;
