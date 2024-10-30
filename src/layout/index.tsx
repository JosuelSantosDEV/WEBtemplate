import React from "react";
import { Grid } from "./styles"
import MainHeader from "../components/MainHeader";
import MainContent from "../components/MainContent";
import SideBar from "../components/SideBar";

const Layout: React.FC = () => {
    return (
    <>
        <Grid>
            <MainHeader/>
            <SideBar/>
            <MainContent/>
        </Grid>
    </>
    )
}
export default Layout;