import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Main from "./Main"


const HomeApp = ({classes}) => (
        <Main/>
    );

HomeApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles()(HomeApp);
