import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`

$star-empty : url('data:image/png;base64,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');
$star-filled : url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4gMaDB0AGSpIegAAA5VJREFUWMPNl11sU2UYx///9z1tl6lBYCEDP5m0BtdF2hUTmV/ILCFemxBiwhWfxsiUtVkZBpW2DDTAhTHhSi8MN8YYE4m2h6BcyIelJWjUbMTEhChRYszYhK6c9+FmKtON9eO03bl833Pe8zv/5/k/z3MAt67cZg/2QLl1HN04pDc/sA3U+yFOkUY2ZCP7Mk0HW/1N7GGPx/s9RBQAiMEVXik+mFn79ngt59YsPS3v4N9QAECFNrR5tzdVsecK/X6K9QOo9K3rAvz2h/P70nORI381RzGxdv0XavJrFy1QC7c2RbFnc/0Pafp+pBJremhevnp9vOPUqoPXGqqY1t5dM0IBAKX9Dl/rloYqFj2zc6lYLcO3BQMAI79OjP7S8eXq9683RDHH403MCgUAiouteUs2NSSUq/KvPUDIxgpiEsexl311C2VvLj6PPsuPGxIj+EJF5hUOiVX6cHxs4mK5ZpgC1p3b3Ho325bRol8ZJyDQfhB+CAIEFtVaNB0aIdQlGowAMgzICEWNlExp+AT//AmRI6V/wHovxLvo8A1CrXQo92hRrvTPymuicRzFn5Xwq1Kx9LpFR31EqAAAaGkO02Qv01rQAaDD8lpdiqLuxRy7lDCgoOXgXAMTmncoIlxbSLwLqm1zAcrAHLJD6T5FUjLh9HYaOdx0pYD9dijdN6XAftGd2mEgB5qmlGBvNpSMT1v57VAqZgR7G+9Is9sOJ3fPWvmj5wcGIeqtBkkVy3SnDpTdktacG4hppYbqyeRAdhwPpQ5X3CvXFBKvaPCQ60A0QoOX7HD6vaqbeLSQOAPwMVfdJziZDSefrnXs8bue62CgpnmsJx9bAnC++y6U9se/7ltQNVgLrc56Jf5dLd5g1WDaIFi/2mVVDwbWD8wYp7NqMCHqFkpSV6eYiFCgOit4k3FopPyGbapTrKew834FubM8JvnYOGNBucEIBJ+XNQxSLXzmbH/7TPsz/hu2Gl8QetY5PSselch0pXK3rK6L5uNPGeqUAntu97hl+YIALlcEJpTOmRqDETktBonjkfSJ6fYz4aGTAJ7ozSWeV4pJEI9OHy55BIBdEZgGS/8DIr6lMYN2OP1pOeGyI6nPRORYtDCwnsI3odSyqXlsihXn2NXitQ8M5btJb1+cMM6L9ifJFdkyof7NP0o2vO/oxOip5cZgCyCXJqnyo6Wxo1Xb+slcYrGrdWIP1Mqzr9432203AQmWTa5Jqlu4AAAAAElFTkSuQmCC');

.star{
    display: inline-block;
    position: relative;
    height: 40px;
    padding-right : 11px;
    cursor: pointer;
    input{
     display:none;
    }
    .star-grey{
      fill:#bcbecf;
    }
    .star-green{
      visibility:hidden;
      fill:#bcbecf;
    }
  }
  
  .star:hover, .star.active, .star:focus {
    .star-grey{
      visibility:hidden;
      fill:#bcbecf;
    }
    .star-green{
      visibility:visible;
      fill:#80c985;
    }
  }
`;
