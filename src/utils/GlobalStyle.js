import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const font = (name, src, fontWeight = 'normal', fontStyle = 'normal') => {
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require('../fonts/' + src + '.eot')});
        src: url(${require('../fonts/' +
          src +
          '.eot')}?#iefix) format("embedded-opentype"),
             url(${require('../fonts/' + src + '.woff')}) format("woff"),
             url(${require('../fonts/' + src + '.ttf')}) format("truetype"),
             url(${require('../fonts/' + src + '.svg')}#${name}) format("svg");

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
         font-display:swap;
    }
    `;
};

export const Global = createGlobalStyle`
${normalize}
${font('Nunito', 'nunito-v25-latin-regular', 400, 'normal')}

body {
  margin: 0;
  ${props => props.theme.fonts.body}
  background-color:${props => props.theme.colors.background} ;
  
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
} 

`;
