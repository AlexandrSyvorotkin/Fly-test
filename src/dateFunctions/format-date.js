const fmDate = {
    month: function(n) {
        switch (n) {
            case 0: return "янв.";
            case 1: return "фев.";
            case 2: return "мар.";
            case 3: return "апр.";
            case 4: return "май.";
            case 5: return "июн.";
            case 6: return "июл.";
            case 7: return "авг.";
            case 8: return "сен.";
            case 9: return "окт.";
            case 10: return "нояб.";
            case 11: return "дек.";
        }
    },

    day: function day(n) {
        switch(n) {
            case 0: return "вскр";
            case 1: return "пн";
            case 2: return "вт";
            case 3: return "ср";
            case 4: return "чт";
            case 5: return "пт";
            case 6: return "сб";
        }
    }
}


export const formatDate = function (str) {
    const date = new Date(str);
    let h = date.getHours().toString();
    h = h.length == 1 ? "0" + h : h;
    let m = date.getMinutes().toString();
    m = m.length == 1 ? "0" + m : m;
    const timeStr = `${h}:${m}`;
    const day = date.getDate();
    const month = fmDate.month(date.getMonth());
    const dayOfWeek = fmDate.day(date.getDay());
    const dateStr = `${day} ${month} ${dayOfWeek}`;

    return ({date: dateStr, time: timeStr});

}

export const minutesToString = function (number) {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours} ч. ${minutes} мин.`;
}
