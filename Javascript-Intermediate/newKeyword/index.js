/* eslint-disable no-undef */
class useCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

userCreator.prototype.increment = function(){this.scoring++;};
userCreator.prototype.login = function(){console.log("Logged in");};

const user1 = new userCreator("Will",3);

user1.increment();


