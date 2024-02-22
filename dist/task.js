"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const list = [];
class Task {
    constructor(id, name, completed) {
        this.id = id;
        this.name = name;
        this.completed = completed;
    }
    addTask() {
        // list.push({ this.id, this.name, this.completed });
        list.push(this.id, this.name, this.completed);
        this.id++;
    }
    completedTask() {
        const nombre = list.find((n) => n.name === this.name);
        if (nombre) {
            nombre.completed = true;
        }
    }
    deleteTask(id) {
        const indice = list.findIndex((i) => i.id === id);
        if (indice) {
            list.splice(indice, 1);
            return true;
        }
    }
    showTaskList() {
        // for (i; i < list.length; i++) {
        //   console.log(list[i]);
        // }
        list.forEach((listaTareas) => {
            console.log(listaTareas);
        });
    }
}
exports.Task = Task;
const tarea = new Task(1, "test", false);
const _tarea2 = new Task(2, "test", false);
tarea.addTask();
_tarea2.addTask();
// tarea.addTask("nombre", 1, false);
// tarea.addTask("nombre2", 2, false);
// tarea.addTask("nombre3", 3, false);
// tarea.completedTask("nombre3");
// tarea.deleteTask(2);
tarea.showTaskList();
