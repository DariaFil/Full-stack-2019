import {C_USER} from "../constants";

export const user = (state = {}, action) => {
    switch (action.type) {
        case C_USER.CHANGE_DATA: {
            return state;
        }
        default:
            return state;
    }
};