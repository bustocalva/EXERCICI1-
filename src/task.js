"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var list = [];
var Task = /** @class */ (function () {
    function Task(id, name, completed) {
        this.id = id;
        this.name = name;
        this.completed = completed;
    }
    Task.prototype.addTask = function () {
        var nuevaTarea = { id: this.id, name: this.name, completed: this.completed };
        list.push(nuevaTarea);
        this.id++;
    };
    Task.prototype.completedTask = function (id) {
        var _this = this;
        var tarea = list.find(function (t) { return t.id === _this.id; });
        if (tarea) {
            tarea.completed = true;
        }
    };
    Task.prototype.deleteTask = function (id) {
        var indice = list.findIndex(function (i) { return i.id === id; });
        if (indice) {
            list.splice(indice, 1);
            return true;
        }
        return false;
    };
    Task.prototype.showTaskList = function () {
        list.forEach(function (listaTareas) {
            console.log(listaTareas);
        });
    };
    return Task;
}());
exports.Task = Task;
var tarea = new Task(1, "test", false);
var _tarea2 = new Task(2, "test", false);
tarea.addTask();
_tarea2.addTask();
// tarea.addTask("nombre", 1, false);
// tarea.addTask("nombre2", 2, false);
// tarea.addTask("nombre3", 3, false);
// tarea.completedTask("nombre3");
// tarea.deleteTask(2);
tarea.showTaskList();
console.log(tarea);
console.log(_tarea2);
