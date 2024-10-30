import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import Page404 from "./pages/Page404";
import SearchPage from "./pages/SearchPage";
import Search from "./pages/Search";

const AppRoutes : React.FC  = () => {
    return (
        
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/setting" component={Setting}/>
                <Route path="/about" component={About} />
                <Route path="/favorite" component={Favorite} />
                <Route path="/search/:search" component={Search} />
                <Route path="/search" component={SearchPage}/>
                <Route path="*" component={Page404}/>
            </Switch>
      

    )   
}

export default AppRoutes;