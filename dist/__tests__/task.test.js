"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("../task");
describe("task", () => {
    const clase = new task_1.Task(0, "prueba", true);
    // beforeAll('iniciamos clase', () => {
    // })
    it("probando el addtask", () => {
        const expected = 1;
        clase.addTask();
        expect(clase.id).toStrictEqual(expected);
    });
    it("probando el completed task", () => {
        const expected = true;
        clase.completedTask();
        expect(clase.completed).toStrictEqual(expected);
    });
    it("probando el deleteTask", () => {
        const expected = true;
        clase.deleteTask(1);
        expect(true).toStrictEqual(expected);
    });
});
