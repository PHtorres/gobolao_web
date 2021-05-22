import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body{
    background: #DEE1E6;
    -webkit-font-smoothing: antialiased;
}

@media(min-width: 450px) {
    body {
    padding: 50px 50px 0 50px;
    }
  }

body, input, button{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong{
font-weight: 500;
}

button{
    cursor: pointer;
}
`