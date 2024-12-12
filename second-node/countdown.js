import PromptSync from "prompt-sync"

const prompt = PromptSync()

let startingNumber = Number(prompt("What number would you like to count down from?"))


// let number = 100
// while (number >= 90) {
//     console.log(number)
//     number -= 1
// }

for (let number = startingNumber; number >= 0; number -=1) {
    console.log(number)   
}


