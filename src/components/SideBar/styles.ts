import styled, { keyframes } from "styled-components";

interface ISideBarProps {
    isOpen: boolean;
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    25% {
        transform: translateX(-75px);
        opacity: .25;
    }
    50% {
        transform: translateX(-50px);
        opacity: .5;
    }
    75% {
        transform: translateX(-25px);
        opacity: .75;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.nav<ISideBarProps>`
    grid-area: SB;

    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.black};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all .5s ease;
    animation: ${animate} .3s;

    > div {
        width: 90%;
        height: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 10px;

    }

    @media (max-width: 850px) {
        display: ${(props) => props.isOpen ? "flex" : "none"};
        position: fixed;
        width: 250px;
        height: calc(100vh - 100px) ;
        top: 100px;
        left: 0;

        > div > div:nth-child(2) {
            display: flex;
        }
    }

    @media (min-width: 851px){
        > div > div:nth-child(2){
            display: none;
        }

        
    }

`;

export const ContainerIcon = styled.div`

    display: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;

    > img {
        width: 100%;
        height: 100%;
    }

    position: fixed;
    right: 10px;
    top: 15px;

    @media (max-width: 850px){
        display: flex;
    }

`;

export const ContainerIconCloseMenu = styled.div`

    display: none;

    width: 50px;
    height: 50px;
    border-radius: 50%;

    > img {
        width: 100%;
        height: 100%;
    }

    position: relative;
    right: -100px;
    top: -40px;

    @media (max-width: 850px){
        display: block;
    }

`;