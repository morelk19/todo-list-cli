const prompt = require('prompt-sync')({sigint: true});
let toDoArr = [];
let listItem = "";
let listChoice = "";
let deleteChoice = "";


printTitle();
console.log(`Your to-do list is empty.`);
printMenu();

let choice = Number(prompt('>'));

while(choice !== 3){
    if(choice === 1){
        
        console.log(`\n~ Creating a new to-do item ~`);
        listItem = prompt(`>`)
        while(listItem.length === 0 ){
            console.log(`Cannot create empty to-do item. Try again.`)
            listItem = prompt(`>`)
        }
        toDoItem(toDoArr, listItem);
        if(toDoArr.length === 0){
            console.log(`Your to-do list is empty.`);
        }else{
            printList();
        }
        printMenu();
    }else if(choice === 2){
        if(toDoArr.length > 0){
            console.log(`\nWhich to-do item would you like to complete?`);
            listChoice= Number(prompt(`>`));
            while(isNaN(listChoice) || listChoice > toDoArr.length || listChoice < 1){
                console.log(`Cannot pick outside of list range. Try again.`);
                listChoice = Number(prompt(`>`));
            }
            completeItem(toDoArr, listChoice);
            if(toDoArr.length === 0){
                console.log(`Your to-do list is empty.`);
            }else{
                printList();
            }
            printMenu();
        }else{
            console.log(`Please create an item on the to list first.`)
        }
    }else if(choice === 4){
        if(toDoArr.length > 0){
            console.log(`\nWhich to-do item would you like to delete?`);
            deleteChoice = Number(prompt(`>`));
            while(isNaN(deleteChoice) || deleteChoice > toDoArr.length || deleteChoice < 1){
                console.log(`Cannot pick outside of list range. Try again.`);
                deleteChoice = Number(prompt(`>`));
            }
            deleteItem(toDoArr, deleteChoice);
            if(toDoArr.length === 0){
                console.log(`Your to-do list is empty.`);
            }else{
                printList();
            }
            printMenu();
        }else{
            console.log(`Please create an item on the to list first.`)
        }

    }
    choice = Number(prompt('>'));
}

function completeItem(arr, num){
    console.log(`Which to-do item would you like to complete?`);
    let string = arr[num-1].substring(13);
    arr[num-1] = arr[num-1].substring(13
        );
    arr[num-1] = `[complete] ` + arr[num-1];
}

function deleteItem(arr, num){
    arr.splice(num-1, 1);

}

function toDoItem(arr, str){

    console.log(`What is this to-do item called?`);
    arr.push(`[incomplete] ` + str);
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
    [3] Exit
    [4] Delete an item`);
}

function printTitle(){
    console.log(`Welcome to the To-Do List Manager Application! 

    ==============================================
    `);
}
