import React from "react";
import { NavLink } from "react-router-dom";
import * as styled from "./styles";

interface IItemMenuProps{
    path: string;
    title: string;
}
const ItemMenu: React.FC<IItemMenuProps> = (props)=> {
    return (
        <styled.Container>
            <NavLink exact className="nav-link" to={props.path} activeClassName="active">
                {props.title}
            </NavLink>
        </styled.Container>
    )
};

export default ItemMenu;