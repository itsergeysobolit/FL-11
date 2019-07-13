let formatTime = time => {
    let days = Math.floor(time / 1440);
    let hours = Math.floor((time / 60) % 24);
    let minutes = time % 60;
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`
}
formatTime(3601);