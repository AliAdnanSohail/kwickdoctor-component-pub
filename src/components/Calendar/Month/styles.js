import css from 'styled-jsx/css';

export default css`
  .month {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    margin: 0;
    padding: 0;
    width: 100%;

    list-style: none;
    font-size: 1rem;
  }
`;
