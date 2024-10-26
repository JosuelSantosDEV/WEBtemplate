import styled from "styled-components";

/*
    Layout
    MH = MainHeader
    AS = Aside
    MC = MainContent
*/
export const Grid = styled.div`
    display: grid;

    grid-template-columns: 250px auto;
    grid-template-rows: 100px auto;
    grid-template-areas:
        'MH MH'
        'AS MC'
    ;
    height: 100vh;
`;