import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Main from "../home/Main";
import Header from "../common/app/HeaderCart";

const CartApp = ({classes}) => (
    <div>
        <Header/>
    </div>
        
    );

CartApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles()(CartApp);