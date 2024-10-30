import React from "react";
import { Container } from "./styles"
import Logo from "../Logo";
import HeaderContent from "../HeaderContent";

const MainHeader: React.FC = () => {
    return (
    <>
        <Container>  
            <Logo/>
            <HeaderContent/>
        </Container>
    </>
    )
}
export default MainHeader;