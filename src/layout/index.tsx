import React from "react";
import { Grid } from "./styles"
import MainHeader from "../components/MainHeader";
import Aside from "../components/Aside";
import MainContent from "../components/MainContent";

const Layout: React.FC = () => {
    return (
    <>
        <Grid>
            <MainHeader/>
            <Aside/>
            <MainContent/>
        </Grid>
    </>
    )
}
export default Layout;