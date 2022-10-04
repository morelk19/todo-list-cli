const prompt = require('prompt-sync')({sigint: true});

function printTitle(){
    console.log(`Welcome to the To-Do List Manager Application! 

    ==============================================
    `);
}

function printList(){
    console.log(`\n==============================================
    
    You have ${toDoArr.length} to-do item(s).`)
    for(let i = 0; i < toDoArr.length; i++){
        console.log(`${i+1}. ${toDoArr[i]}`);
    }
}

function printMenu(){
    console.log(`\n~ Select an action ~
    [1] Create a to-do item
    [2] Complete a to-do item
    [3] Exit`);
}

function toDoItem(arr, str){

    console.log(`What is this to-do item called?`);
    arr.push(`[incomplete] ` + str);
}

function completeItem(arr, num){
    console.log(`Which to-do item would you like to complete?`);
    let string = arr[num-1].substring(13);
    arr[num-1] = arr[num-1].substring(13
        );
    arr[num-1] = `[complete] ` + arr[num-1];
}

let toDoArr = [];
printTitle();
if(toDoArr.length === 0){
    console.log(`Your to-do list is empty.`);
}
printMenu();

let choice = Number(prompt('>'));

while(choice !== 3){
    if(choice === 1){
        console.log(`\n~ Creating a new to-do item ~`);
        toDoItem(toDoArr, String(prompt(`>`)));
        if(toDoArr.length === 0){
            console.log(`Your to-do list is empty.`);
        }else{
            printList();
        }
        printMenu();
    }else if(choice === 2){
        console.log(`\nWhich to-do item would you like to complete?`);
        completeItem(toDoArr, Number(prompt(`>`)))
        if(toDoArr.length === 0){
            console.log(`Your to-do list is empty.`);
        }else{
            printList();
        }
        printMenu();
    }
    choice = Number(prompt('>'));
}