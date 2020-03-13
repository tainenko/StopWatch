import padStart from "lodash/padStart";

const ms2Time = (milliseconds) => {
    let time = milliseconds;
    const ms = time % 1000;
    time = (milliseconds - ms) / 1000;
    const second = time % 60;
    time = (time - second) / 60;
    const minute = time % 60;
    const hour = (time - minute) / 60;
    return padStart(hour, 2, '0') + ":" + padStart(minute, 2, '0') + ":" + padStart(second, 2, '0') + "." + padStart(ms, 3, '0');
};

export default ms2Time;