export const CURRENT_DATE = "CURRENT_DATE";

export const currentDate = (date) => {
    return {
        type: CURRENT_DATE,
        payload: date,
    }
}