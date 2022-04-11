import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --background : #16052B;
    --transfer-button-background : linear-gradient(90deg, rgba(172,106,236,1) 34%, rgba(187,127,245,1) 100%);
    --graphic-border : #868B93;
    --border-crypto : #9d9aa3;

    --box-color : #3C354A;


    --crypto-percentage-positive: #00C287;
    --crypto-percentage-negative : #E72D04;

    --shadow-button : #261B4C;

}


* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
     background: var(--background);
 }

 


`


export const Division = styled.div`
 margin-left: 6.25rem;
 width: 100% - 6.25rem;
 padding: 8rem 3rem;
`