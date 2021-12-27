//Clase que represente una tarea
//1 - nombre de la tarea
//2 - se ha completado ?

class TodoItem 
{
    constructor(public task:string, public isCompleted:boolean){

    }
}

//administrador de las tareas
//1 - lista de las tareas
//2 - defina las operaciones a ejecutar con las tareas

 class TaskManager 
 {
     task : TodoItem[] = [];

     addTask(task:string):void{
         const newItem = new TodoItem(task, false);
         this.task.push(newItem);
     }
 }

 class HTMLHelper {
    static createTaskItem(task:TodoItem):HTMLElement{
        const listItem = document.createElement("li");
        const checkBox = document.createElement("input");
        const label = document.createElement("label");

        checkBox.addEventListener('change', () =>{
            if(checkBox.checked){
                task.isCompleted = true;
                displayTask()
            }
        })

        checkBox.type = "checkbox";
        label.innerText = task.task;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);

        return listItem;

    }
 }


 const taskInput = <HTMLInputElement>document.getElementById("new-task")!;
 
 const addButton = document.getElementById("add-task")!;

 const incompleteTaskHolder = document.getElementById("incomplete-task")!;

 const completedTaskHolder = document.getElementById("completed-task")!;

 const taskManager = new TaskManager();

 addButton.addEventListener("click",()=>{
    taskManager.addTask(taskInput.value);
    displayTask();
    clear();
 });

 const displayTask = () =>{
    completedTaskHolder.innerHTML = "";
    incompleteTaskHolder.innerHTML = "";

    taskManager.task.forEach(element =>{
        var listItem = HTMLHelper.createTaskItem(element);
        if(element.isCompleted){
            completedTaskHolder.appendChild(listItem);
        }else{
            incompleteTaskHolder.appendChild(listItem);
        }
    })
 }

 function clear () {
     taskInput.value = "";
 }