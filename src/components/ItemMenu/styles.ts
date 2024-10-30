import styled, { css } from "styled-components";

export const Container = styled.div`
    
    ${
        (props) => css`
           
            height: 50px;
            width: 200px;
            border-radius: 10px;
            border: 2px solid ${props.theme.colors.gray};

            &:has(.active){
                border-color:${props.theme.colors.primary};
            }

            > .nav-link {
                display: flex;

                width: 100%;
                height: 100%;

                text-decoration: none;
                align-items: center;
                justify-content: center;

                font-size: 22px;
                color: ${props.theme.colors.primary};
                
            }
            > .active {
                color: ${props.theme.colors.tertiary};
                

            
            }
        `
    }
`;
