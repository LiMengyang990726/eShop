import {Typography} from "@material-ui/core";
import ReportSection from "./ReportSection";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {};

const LostPage = ({classes}) => (
    <div className={classes.section}>
        <Typography className={classes.subtitle} variant="h4">Report your lost</Typography>
        <ReportSection/>
    </div>
);

export default withStyles(styles)(LostPage)
