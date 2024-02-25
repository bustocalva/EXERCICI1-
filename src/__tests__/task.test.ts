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
  it("probando el completedtask", ()=> {
    const expected= 1
    clase.completedTask(0);
    expect(clase.id).toStrictEqual(expected);
  });
  it("probando el deletedTask", ()=> {
    const expected= true;
    expect(clase.deleteTask(0)).toStrictEqual(expected);
  });
  it("probando el showtasklist", ()=> {
    clase.addTask();
    let lista = clase.showTaskList();
    
    expect(lista).toEqual([]);
  });

});

