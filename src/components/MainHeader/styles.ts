import styled from "styled-components";

/*
    Layout
    LG = Logo
    HC = HeaderContent
*/
export const Container = styled.header`
   grid-area: MH;
   display: grid;
   grid-template-columns: 250px auto;
   grid-template-rows: auto;
   grid-template-areas:'LG HC';

   align-items: center;
   

   background-color:${(props) => props.theme.colors.primary};
   color: ${(props) => props.theme.colors.tertiary};
`;