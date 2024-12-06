import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "select an operation!",
        choices: ["add", "delete", "view", "update", "Exit"],
    });
    if (answer.select === "add") {
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input", // This should be "input" instead of "list" for entering items
            message: "Add items to the list",
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (answer.select === "update") {
        let update = await inquirer.prompt({
            name: "todo",
            type: "list", // This should be "list" to select from existing todos
            message: "Select an item to update",
            choices: todos.map((item) => item)
        });
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Enter the updated item",
        });
        // Replace the old item with the new one
        let newTodo = todos.filter(val => val !== update.todo);
        todos = [...newTodo, addTodo.todo];
        console.log(todos);
    }
    if (answer.select === "view") {
        console.log(todos);
    }
    if (answer.select === "delete") {
        let deleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list", // This should be "list" to select from existing todos
            message: "Select an item to delete",
            choices: todos.map((item) => item)
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
    if (answer.select === "Exit") {
        console.log("EXIT");
        condition = false; // Break the loop to exit
    }
}
