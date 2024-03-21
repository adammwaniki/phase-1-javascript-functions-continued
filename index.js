// code your solution here
//#1
function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

//#2
function mondayWork (activity = "go to the office") {
    return (`This Monday, I will ${activity}.`)
}

//#3
//make a function that returns an anonymous inner function since everything is handled within the function scope as far as i can see
//make a parameter called wrapper with a placeholder called *
//the inner function has the parameter called adjective
//the inner function returns the string as required using interpolation 
function wrapAdjective(wrapper = "*") {
     return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}