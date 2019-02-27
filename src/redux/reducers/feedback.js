import {asyncReducer} from "./utils";
import {FB_POST_RECEIVE, FB_POST_REQUEST} from "../../constants/actionTypes"

const initState = {
    feedbackPost: {
        state: "INIT",
        reason: "",
        time: null,
    }
};

export default function (state = initState, action) {
    switch (action.type) {
        case FB_POST_REQUEST:
        case FB_POST_RECEIVE:
            return {
                ...state,
                feedbackPost: asyncReducer(state.feedbackPost,
                    action, {
                        request: FB_POST_REQUEST,
                        receive: FB_POST_RECEIVE,
                    })
            };
        default:
            return {...state}
    }
}
