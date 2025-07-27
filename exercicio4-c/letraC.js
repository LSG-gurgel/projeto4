const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

const allTasksIncomplete = tasks.every ( tasks => !tasks.completed && tasks.priority === "alta");
    console.log("Tarefas de alta prioridade incompletas: ",allTasksIncomplete);

    if (allTasksIncomplete == false){
        console.log("Todas as tarefas de alta prioridade estçao feitas")
    };