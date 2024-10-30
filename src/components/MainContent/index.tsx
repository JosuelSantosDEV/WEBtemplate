import React from "react";
import { Container } from "./styles"
import AppRoutes from "../../routes";

const MainContent: React.FC = () => {
    return (
        <>
            <Container>
                <AppRoutes/>
            </Container>
        </>
    )
}
export default MainContent;