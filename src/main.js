function createTask(nameTask, timerTask) {
    const task = new Task(nameTask, timerTask)
    return task
}

function createStepOfTask(nameTask, nameStep, timerStep) {
    const step = createTask(nameStep, timerStep)
    nameTask.addStep(nameStep)
    return step
}

const piano = createTask("Piano", 60)
const aquecimentoPiano = createStepOfTask(piano, "Aquecimento", 10)

console.log("Tarefa: Piano ", piano)
console.log("Etapas do Piano", aquecimentoPiano)