import { CURRENT_DATE } from "./actions";

const weekday = ['일','월','화','수','목','금','토']
const initial = {
        fullDate: new Date(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        day: weekday[new Date().getDay()]
    };
const dateReducer = (state = initial, action) => {
    switch (action.type) {
        case CURRENT_DATE:
            return action.payload;
        default:
            return state;
    }
}

export default dateReducer;