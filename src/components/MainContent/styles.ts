import styled from "styled-components";

export const Container = styled.main`
    grid-area: MC;

    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.primary};
`;