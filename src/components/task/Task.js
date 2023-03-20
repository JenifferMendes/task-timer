class Task {


    constructor (title, timer) {
        if (!title) {
            throw new Error("O nome da tarefa é obrigatório")
        }
        if (timer < 0) {
            throw new Error("Tempo inválido, insira um novo")
        }
        this.title = title;
        this.timer = timer;
        this.steps = [];
    }

    addStep(task) {
        this.steps.push(task)
    }
}

const task = new Task("piano", 40)
const aquecimento = new Task("aquecimento", 10)
task.addStep(aquecimento)