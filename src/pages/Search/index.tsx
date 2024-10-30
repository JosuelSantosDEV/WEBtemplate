import React from "react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";

interface IParamsProps {
    search: string;
}

const Search: React.FC = ()=> {
    const { search } = useParams<IParamsProps>();

    return (
        <Container>
            <h1>Search</h1>
            <div>
                <h3>Did you search for:</h3>
                <h2>{search}</h2>
            </div>
        </Container>
    )
};

export default Search;