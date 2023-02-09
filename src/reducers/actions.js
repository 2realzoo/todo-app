export const CURRENT_DATE = "CURRENT_DATE";
export const TODO_DATA ="TODO_DATA"

export const currentDate = (date) => {
    return {
        type: CURRENT_DATE,
        payload: date,
    }
}

export const todoData = (data) => {
    return {
        type: TODO_DATA,
        payload: data,
    }
}