import {FB_POST_RECEIVE, FB_POST_REQUEST} from "../../constants/actionTypes";

function post_Request() {
    return {
        type: FB_POST_REQUEST
    };
}

function post_ReceiveSuccess(json) {
    return {
        type: FB_POST_RECEIVE,
        status: "SUCCESS",
        time: json.time,
    }
}

function post_ReceiveFailure(json) {
    return {
        type: FB_POST_RECEIVE,
        status: "FAILURE",
        reason: json.data,
        time: json.time,
    };
}

export const FB_post = (form) => dispatch => {
    // const formData = new FormData();
    // formData.append("data", form);
    // xmlHttpRequest(dispatch, "POST", {
    //     url: "/restapi/feedback",
    //     request: post_Request,
    //     receiveSuccess: post_ReceiveSuccess,
    //     receiveFailure: post_ReceiveFailure,
    //     formData: formData,
    // });

    // TODO: mock post
    dispatch(post_ReceiveSuccess({time: new Date()}));
};
