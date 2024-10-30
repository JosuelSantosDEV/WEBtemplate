import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    > h1{
        padding-top:10px ;
        text-align: center;
    }

    > div {
        margin-top: 20px;
        display: flex;
        justify-content: center;

        > input {
            height: 50px;
            width: 40%;
            border-radius: 10px;
            font-size: 20px;
            padding-left: 10px;
            color: ${props => props.theme.colors.primary};
            background-color: ${props => props.theme.colors.white};
            border: 2px solid ${props => props.theme.colors.primary};
        }
        > button {
            height: 50px;
            width: 90px;
            border-radius: 10px;
            margin-left: 10px;
            font-size: 20px;
            color:${props => props.theme.colors.tertiary};
            border: 2px solid ${props => props.theme.colors.primary};;
            background-color: ${props => props.theme.colors.secondary};
            border: 2px solid ${props => props.theme.colors.primary};

            &:active {
                color: ${props => props.theme.colors.primary};;
                background-color: ${props => props.theme.colors.tertiary};
            }

            &:hover{
                box-shadow: 3px 3px 3px ${props => props.theme.colors.secondary};
            }
        }
    }
    
`;