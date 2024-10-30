import styled, { css, keyframes } from "styled-components";

interface IAccountMenuProps {
    isOpen: boolean;
}

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    25% {
        transform: translateX(75px);
        opacity: .25;
    }
    50% {
        transform: translateX(50px);
        opacity: .5;
    }
    75% {
        transform: translateX(25px);
        opacity: .75;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div<IAccountMenuProps>`

    ${
        ({isOpen, theme}) => isOpen ? css`

            position: fixed;
            top: 0;
            right: 0;

            width: 280px;
            height: 100vh;


            background-color: ${theme.colors.gray} ;

            display: flex;
            flex-direction: column;
            align-items: center;

            transition: all .5 linear;
            animation: ${animate} .3s;

            > img {
                margin-top: 10px;
                width: 100px;
                height: 100px;
            }
            > div {

                margin-top: 50px;

                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;

                > p {
                    font-size: 20px;
                    font-weight: 600;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: ${theme.colors.primary};
                }
            }
        `
        :
        css`

            position: relative;

            width: 70px;
            height: 70px;

            margin-right: 10px;

            background-color: none;


            > img {
                width: 70px;
                height: 70px;
            }
        `
    }

`;