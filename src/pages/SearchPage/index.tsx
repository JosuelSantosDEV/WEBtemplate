import React, { useState } from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";



const SearchPage: React.FC = ()=> {
    const [input, setInput] = useState("");
    const history = useHistory();


    const handleSearch = () => {
        if(input.trim() !== "")history.push(`/search/${input.trim()}`);
        else setInput("");
    }

    return (
        <Container>
            <h1>Search Page</h1>
            <div>
                <input value={input} type="text" onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSearch} >Search</button>
            </div>
        </Container>
    )
};

export default SearchPage;