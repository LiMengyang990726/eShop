import React from "react";
import {connect} from "react-redux";
import Snackbar from "../common/Snackbar";

const mapStateToProps = state => ({
    postState: state.feedback.feedbackPost,
});

const MessageBars = ({postState}) => (
    <React.Fragment>
        <Snackbar state={postState} message={{success: "We have heard your voice!"}}/>
    </React.Fragment>
);

export default connect(mapStateToProps)(MessageBars);