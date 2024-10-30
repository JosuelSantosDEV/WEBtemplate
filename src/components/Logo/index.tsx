import React from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";


const Logo: React.FC = ()=> {
    const history = useHistory();
    const handleHomeRedirect = ()=> {
        history.push("/");
    }
    return (
        <Container>
            <h1 onClick={handleHomeRedirect}>WEBlayout</h1>
        </Container>
    )
};

export default Logo;