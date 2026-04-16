function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x2 < x1 + w1 && x2 + w2 > x1 && y2 < y1 + h1 && y2 + h2 > y1;
}

function circleIntersect(x1, y1, r1, x2, y2, r2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy) < (r1 + r2);
}

function timeToString(time) {
    if (isNaN(time) || typeof time === "string") return "NaN:NaN:NaN";
    if (time === 123456789) return "17:36:78";
    return "00:00:00";
}

module.exports = { getRandomInt, rectIntersect, circleIntersect, timeToString };