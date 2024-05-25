#! /usr/bin/env node
import inquirer from "inquirer";
let play = true;
while (play) {
    let playerName = await inquirer.prompt([
        {
            name: "player",
            type: "input",
            message: "Please Enter Your Name"
        }
    ]);
    console.log(`Hello! ${playerName.player} welcome to the adventure palace`);
    console.log("You are now in the hallway of the adventure palace");
    let playGame = await inquirer.prompt([
        {
            name: "path",
            type: "list",
            message: "Choose your way to proceed wisely to move further",
            choices: ["Climb Upstairs", "Go Downstairs", "Walk Straight"]
        }
    ]);
    if (playGame.path == "Climb Upstairs") {
        console.log("You have reached the upper floor of the adventurous palace");
        let option = await inquirer.prompt([
            { name: "next",
                type: "list",
                message: "Choose your move wisely as there is treasure ahead",
                choices: ["Door 1", "Door 2", "Door 3"]
            }
        ]);
        if (option.next == "Door 1") {
            console.log("Oops! you have entered the wrong room there are mouses and reptiles in this room");
            console.log("YOU LOOSE");
        }
        else if (option.next == "Door 2") {
            console.log("Hurrah! you have entered the treasure room.\n YOU WON \n ");
        }
        else if (option.next == "Door 3") {
            console.log("Oh No! you have entered the monster room.\n YOU LOOSE \n");
        }
    }
    if (playGame.path == "Go Downstairs") {
        console.log("You have reched the basement of the adventurous palace");
        let option = await inquirer.prompt([
            { name: "next",
                type: "list",
                message: "Choose your move wisely as there is treasure ahead",
                choices: ["Door 1", "Door 2", "Door 3"]
            }
        ]);
        if (option.next == "Door 1") {
            console.log("Oops! you have entered the zoombie room .\n YOU LOOSE \n ");
            console.log("You Loose");
        }
        else if (option.next == "Door 2") {
            console.log("Oops! you have entered the spooky room .\n YOU LOOSE \n ");
        }
        else if (option.next == "Door 3") {
            console.log("Hurrah! you have entered the treasure room. \n YOU WON \n");
        }
    }
    if (playGame.path == "Walk Straight") {
        console.log("You have choosen to walk ahead on the ground floor");
        let option = await inquirer.prompt([
            { name: "next",
                type: "list",
                message: "Choose your move wisely as there is treasure ahead",
                choices: ["Door 1", "Door 2", "Door 3"]
            }
        ]);
        if (option.next == "Door 1") {
            console.log("Oops! you have entered the monster room .\n YOU LOOSE \n");
        }
        else if (option.next == "Door 2") {
            console.log("Oh No! you have entered the fire room .\n YOU LOOSE \n");
        }
        else if (option.next == "Door 3") {
            console.log("Hurrah! you have entered the treasure room. \n YOU WON \n ");
        }
    }
    console.log("GAME OVER");
    let again = await inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: "Would you like to play again?",
            default: "true"
        }
    ]);
    play = again.playAgain;
}
console.log("\n \t THANKYOU FOR PLAYING FIFI ADVENTURE GAME. \t \n  ");
