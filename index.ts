#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function startTimer(){
    console.log(chalk.bgBlue("\n\tWelcome to COUNTDOWN TIMER App \n"));
    const timeInput = await inquirer.prompt({
        type:"input",
        name:"duration",
        message:"Enter the duration in Second"
    }) 
    const duration = parseInt(timeInput.duration)
    let secondsLeft = duration
    const timer = setInterval(()=>{
        if(secondsLeft>0){
        console.clear()
    console.log(chalk.greenBright(`Time remaining ${secondsLeft}`));
    secondsLeft--}
    else{
        clearInterval(timer)
        console.clear()
        console.log(chalk.yellow(`Timer expired`));
        
    }
    }
    
    ,1000)
}
startTimer()