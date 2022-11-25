// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(work = 'go to the office') {
    return (`This Monday, I will ${work}.`);
}
mondayWork();

function wrapAdjective (str= '*') {
    return function(name = 'special') {
        return `You are ${str}${name}${str}!`
    }
}
