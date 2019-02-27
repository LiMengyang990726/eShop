import React from 'react';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import ReportForm from './ReportForm'
import Drawer from "@material-ui/core/Drawer";
import {CardContent, CardHeader, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseRounded";
import {FB_post} from "../../redux/actions/feedback";

const styles = {};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    handleSubmit: form => dispatch(FB_post(form))
});

const FeedbackApp = ({classes, open, handleClose, handleSubmit}) => (
    <Drawer anchor="bottom" open={open}>
        <CardHeader title="Feedback" action={
            <IconButton onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
        }/>
        <CardContent>
            <ReportForm handleSubmit={handleSubmit} handleClose={handleClose}/>
        </CardContent>
    </Drawer>
);

FeedbackApp.defaultProps = {
    open: false,
};

FeedbackApp.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FeedbackApp));
