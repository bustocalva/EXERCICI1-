interface TTask {
  id: number;
  name: string;
  completed: boolean
}


const list: TTask[] = [];



export class Task implements TTask {
  constructor(
    public id: number,
    public name: string,
    public completed: boolean
  ) {}

  addTask() {
    const nuevaTarea: TTask = new Task(this.id, this.name, this.completed);
    list.push(nuevaTarea);
    this.id++;
  }
  completedTask(id:number) {
    const tarea = list.find((t) => t.id ===id);
    if (tarea) {
      tarea.completed = true;
    }
    return this.id;
  }
  deleteTask(id: number): boolean {
    const indice = list.findIndex((i) => i.id === id);
    if (indice) {
      list.splice(indice, 1);
      return true;
    }
    return false;
  }
  showTaskList():void {
    list.forEach((listaTareas) => {
      console.log(listaTareas);
      return [listaTareas];
    }
    
    )};
   
}
const tarea = new Task(1, "test", false);
const _tarea2 = new Task(2, "test", false);
tarea.addTask();
_tarea2.addTask();
// tarea.addTask("nombre", 1, false);
// tarea.addTask("nombre2", 2, false);
// tarea.addTask("nombre3", 3, false);

tarea.completedTask(1);

tarea.deleteTask(2);

tarea.showTaskList();

//console.log(tarea);
//console.log(_tarea2);//
