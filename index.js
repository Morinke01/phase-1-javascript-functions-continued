// code your solution here
//passing arguments given default arguments
function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`
    }
saturdayFun();

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
};
mondayWork("work from home");

function wrapAdjective(name = "*"){
    return function(activity="special"){
    return (`You are ${name}${activity}${name}!`);
    }
}
wrapAdjective("%")("a hard worker");
