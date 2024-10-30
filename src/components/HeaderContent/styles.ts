import styled from "styled-components";

export const Container = styled.div`
    grid-area: HC;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 850px){
        > div {
            display: none;
        }
   }
`;
