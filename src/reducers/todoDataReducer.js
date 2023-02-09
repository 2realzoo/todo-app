import { TODO_DATA } from "./actions";

const initial = [];
const todoDataReducer = (state = initial, action) => {
    switch (action.type) {
        case TODO_DATA:
            return action.payload;
        default:
            return state;
    }
}

export default todoDataReducer;