import {Route, Router, Switch} from "react-router-dom";
import LostFoundApp from "./index";
import PageNotFound from "../common/app/PageNotFound";
import React from "react";
import FoundPage from "./FoundPage";
import LostPage from "./LostPage";

const LostNFoundRouter = ({history}) => (
    <Router history={history}>
        <Switch>
            <Route exact path="/lost-and-found" component={LostFoundApp}/>
            <Route path="/lost-and-found/lost" component={LostPage}/>
            <Route path="/lost-and-found/explore" component={FoundPage}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);

export default LostNFoundRouter;
