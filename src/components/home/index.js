import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Main from "./Cards";

const styles = () => ({
    root: {
        flexGrow: 1,
    },
});

const HomeApp = ({classes}) => (
        <div className={classes.root}>
            <Main/>
            {/*{ReactDom.createPortal(<Footer/>, document.getElementById("outfox-footer-container"))}*/}
        </div>
    );

HomeApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeApp);
