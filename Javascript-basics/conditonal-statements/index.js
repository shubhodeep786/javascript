// Conditional Statements
// 1. if statement let us execute a block of code if a specified condition is true
// if (condition) 
if (you.wannaBeMyLover) {
    console.log('You gotta get with my friends');
}

// 2. if...else statement let us execute a block of code if a specified condition is true and another block of code if it is false
if (you.reallyBugMe) {
    // Block of code to be executed if the condition is true
    me.say("Goodbye");
} else {
    // Block of code to be executed if the condition is false
    me.say("Hello");
}

// Compare: we chain else and if blocks together
if (you.reallyBugMe) {
    // Block of code to be executed if the condition is true
    me.say("Goodbye");
} else if (you.wannaBeMyLover) {
    me.say("You gotta get with my friends");
} else {
    // Block of code to be executed if the condition is false
    me.say("Hello");
}

// The (condition) is an expression that evaluates to true or false. If the condition is true, the code inside the if block is executed. If the condition is false, the code inside the else block is executed.
if (forecast === 'rain') {
    me.takeUmbrella();
} else if (forecast === 'snow') {
    me.wearCoat();
} else {
    me.wearSunglasses();
}

// Boolean (logical) operators can be used to combine multiple conditions in an if statement. For example: 
let someoneIsAroundYou = false;
if (!someoneIsAroundYou) {
    console.log('You are alone');
}

// Sometimes we care about the truthiness of a value, not just if it is true
if (you.happy && you.knowIt) {
    you.clapHands();
}
