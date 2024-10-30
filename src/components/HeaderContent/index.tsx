import React from "react";
import { Container } from "./styles";
import AccountMenu from "../AccountMenu";


const HeaderContent: React.FC = ()=> {
    return (
        <Container>
            <AccountMenu/>
        </Container>
    )
};

export default HeaderContent;