import {Route, Router, Switch} from "react-router-dom";
import CanteenApp from "./index";
import PageNotFound from "../common/app/PageNotFound";
import React from "react";
import SearchResultPage from "./SearchResultPage";
import SearchResult from "./SearchResult";

const CanteenRouter = ({history}) => (
    <Router history={history}>
        <Switch>
            <Route exact path="/canteen/" component={CanteenApp}/>
            <Route path="/canteen/search" component={SearchResultPage}/>
            <Route path="/canteen/food-on-the-way" component={SearchResult}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);

export default CanteenRouter;
