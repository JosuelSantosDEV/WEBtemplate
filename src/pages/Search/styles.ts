import styled from "styled-components";

export const Container = styled.div`

    height: 100%;
    width: 100%;

    > h1{
        padding-top:10px ;
        text-align: center;
    }

    > div {
        width: 100%;
        margin-top: 20px;
        padding: 0 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        > h3 {
            color: ${props => props.theme.colors.secondary};
        }
        > h2 {
            margin: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    @media (max-width: 1035px) {
        > div > h2 {
            width: 300px;
        }
    }

    @media (max-width: 540px) {
        > div > h2 {
            width: 180px;
        }
    }
`;
