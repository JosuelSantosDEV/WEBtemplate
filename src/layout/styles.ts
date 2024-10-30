import styled from "styled-components";

/*
    Layout
    MH = MainHeader
    SB = SideBar
    MC = MainContent
*/
export const Grid = styled.div`
    display: grid;

    grid-template-columns: 250px auto;
    grid-template-rows: 100px auto;
    grid-template-areas:
        'MH MH'
        'SB MC'
    ;
    height: 100vh;

    @media (max-width: 850px) {
        grid-template-columns: 250px auto;
        grid-template-rows: 100px auto;
        grid-template-areas:
        'MH MH'
        'MC MC'
        ;
    }
`;