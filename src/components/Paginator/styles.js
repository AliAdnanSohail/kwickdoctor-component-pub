import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
  .paginator {
    display: block;
  }

  .pagination {
    display: inline-block;
    width: 672px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .pagination a {
    text-decoration: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 30px;
    text-align: center;
  }

  .pagination li {
    float:left;
    margin-left:3px;
    height: 30px;
    min-width: 30px;
    padding: 6px 10px 6px 11px;
    background-color: #fff;
    color: ${settings.textColor};
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: bold;
    font-size: 0.875rem;
    position: relative;
  }

  .pagination li:hover:not(.break) {
    background-color: #eff0f4;
  }

  .pagination li.break {
    cursor: initial;
  }



  .pagination li.active, .pagination li.active:hover {
      background-color: ${settings.primaryColor};
      color: #fff;
      cursor: initial;
  }

  .pagination li.previous, .pagination li.next {
    background-color: #eff0f4;
  }

  .pagination li.previous a, .pagination li.next a {
    padding: 3px 0;
  }



  .pagination li.previous {
    margin-right: 30px;
  }

  .pagination li.next {
    margin-left: 30px;
  }
`;
