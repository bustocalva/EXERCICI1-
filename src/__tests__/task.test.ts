import { Task } from "../task";

describe("task", () => {
  const clase = new Task(0, "prueba", true);
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
  it("probando el deleteTask", ()=>{
    const expected = 
  })

});
