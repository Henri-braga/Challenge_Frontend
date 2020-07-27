import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box!important;
}

html, body, #root {
  height: 100vh;
  font-family: 'Charm', cursive;
}

body {
  background: #f0f0f5;
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body, button, input {
  font: 16px sans-serif;
}

a {
  text-decoration: none;
}

ul  {
  list-style: none;
}

button {
  cursor: pointer;
}

`;
