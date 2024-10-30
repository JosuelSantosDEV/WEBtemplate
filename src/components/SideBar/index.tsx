import React, { useState } from "react";
import { Container, ContainerIcon, ContainerIconCloseMenu } from "./styles"
import ItemMenu from "../ItemMenu";
import AccountMenu from "../AccountMenu";

const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenOrCloseMenuSideBar = () => {
        setIsOpen(!isOpen);
    }

    return (
    <>
        {!isOpen && (
            <ContainerIcon>
                    <img onClick={handleOpenOrCloseMenuSideBar} src="/icon-menu-open.svg" alt="Open menu" />
            </ContainerIcon>)
        }
        <Container isOpen={isOpen}>
            <div>
                <ContainerIconCloseMenu>
                    <img onClick={handleOpenOrCloseMenuSideBar} src="/icon-menu-close.svg" alt="Close menu" />
                </ContainerIconCloseMenu>
                <AccountMenu/>
                <ItemMenu path="/" title="Home"/>
                <ItemMenu path="/favorite" title="Favorites"/>
                <ItemMenu path="/about" title="About"/>
                <ItemMenu path="/setting" title="Settings"/>
                <ItemMenu path="/search" title="Search"/>
            </div>
        </Container>
    </>
    )
}
export default SideBar;