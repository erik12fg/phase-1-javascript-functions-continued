function saturdayFun (action = "roller-skate") {
    return `This Saturday, I want to ${action}!`;
}
function mondayWork (action = "go to the office") {
    return `This Monday, I will ${action}.`;
}
function wrapAdjective (flair = "*") {
    return function (word = "special") {
        return `You are ${flair}${word}${flair}!`;
    };
}
