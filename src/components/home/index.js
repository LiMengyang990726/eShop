import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Main from "./Main"
import Header from "../common/app/Header"

const HomeApp = ({classes}) => (
    <div>
        <Header/>
        <Main/>
    </div>
        
    );

HomeApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles()(HomeApp);
