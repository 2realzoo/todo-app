
export const dateFilter = (data, date) => {
    return data.filter(el => el.date.year === date.year
        && el.date.month === date.month
        && el.date.date === date.date);
};