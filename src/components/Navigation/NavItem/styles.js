import css from 'styled-jsx/css';

export default css`
    .link__icon { 
        width: 17px;
        height: 17px;
    }
    .link__txt {
        text-decoration: none;
    }
    .link__img-container {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        text-align: center;
        float: left;
        margin-right: 1rem;
    }
    .link__img-container > svg > path {
        stroke: white!important;
    }
    .link__icon path {
        stroke: white!important;
    }
    .link__icon {
        stroke: white;
    }
    .link {
        text-decoration: none;
        clear: both;
        display: block;
        color: #99a1af;
        margin-bottom: 0.5rem;
    }
    .link:hover {
        color: white;
    }
    .link:hover > .link__img-container {
        background: #0c97f9;
        box-shadow: 0px 4px 18px -3px #0c97f9;
    }
    .linkActive {
        color: white;
    }
    .link__txt {
        display: none;
    }
    @supports (display: flex) {
        .link {
            display: flex;
            align-items: center;
        }
        .link__img-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media (min-width: 790px) {
        .link__txt {
            display: block;
        }
    }
`;
