function saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}


(function () {
    console.log('Yet more razzling');
}
)

const mondayWork = (function (activity='go to the office') {
    return `This Monday, I will ${activity}.`;
})

function wrapAdjective (visualFlair='*') {
    return function (adjective='special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
}