import * as readline from "node:readline/promises";
import {stdin as ipnut, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

class User {
    constructor(firstName, lastName, age, weight, fitnessLevel, goals = []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.weight = weight;
        this.fitnessLevel = fitnessLevel;
        this.goals = goals;
    }

    get fullName() {
        return `${firstName} ${lastName}`
    }
}

class Goal {
    constructor(description, completed = false) {
        this.description = description;
        this.completed = completed;
    }
}

async function ListFitnessLevels() {
    const fitnessLevels = ["Beginner", "Intermediate", "Expert"]

    fitnessLevels.forEach(level, index => {
        console.log(`${level.index + 1}: ${level}`)
    });

    const userChoice = await Number(rl.question("\nPlease enter the number that best aligns with your fitness level: "));

    if (![1,2,3].includes(userChoice)) {
        throw new Error('You did not enter a valid option');
    }
    
    return userChoice;
}

async function CreateGoal() {

}



async function CreateUser() {

    const firstname = await rl.question("Please enter your first name: ")
    const lastname = await rl.question("Please enter your last name: ")
    const age = await Number(rl.question("Please enter your age: "))
    const weight = await Number(rl.question("Please enter your weight: "))

    const fitnessLevel = await ListFitnessLevels();


}






function main() {




    rl.close()
}

