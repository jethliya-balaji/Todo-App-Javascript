const inputFeild = document.querySelector(".todoInputFeild");
const addTaskButton = document.querySelector(".todoAddButton");
const unOrderList = document.querySelector(".list-group");

addTaskButton.addEventListener("click", addTodoTask);

inputFeild.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        addTodoTask()
    }
})


function addTodoTask() {
    if (inputFeild.value == "") {

    } else {
        const todoTaskList = document.createElement("li");
        todoTaskList.classList.add("list-group-item");
        todoTaskList.classList.add("mx-5");
        todoTaskList.classList.add("d-flex");
        todoTaskList.classList.add("justify-content-between");
        todoTaskList.classList.add("border-dark");
        todoTaskList.classList.add("border-5");
        
        const todoTask = document.createTextNode(inputFeild.value);
        todoTaskList.appendChild(todoTask);

        const todoCancelButton = document.createElement("button")
        todoCancelButton.classList.add("btn")
        todoCancelButton.classList.add("btn-outline-danger")
        todoCancelButton.classList.add("btn-sm")
        todoCancelButton.classList.add("deleteTodoTaskButton")

        const todocancelText = document.createTextNode("X");
        todoCancelButton.appendChild(todocancelText);

        todoTaskList.appendChild(todoCancelButton)
        unOrderList.appendChild(todoTaskList);
        inputFeild.value = "";
    };
};


unOrderList.addEventListener("click", (e) => {
    if (e.target.classList[3] === "deleteTodoTaskButton") {
        e.target.parentElement.remove()
    }
})