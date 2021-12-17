import React from 'react';
import Task from "./components/Task";
import TaskInput from "./components/TaskInput"



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {id: 0, title: "created to do app 1", done: false},
        {id: 1, title: "created to do app 2", done: true},
        {id: 2, title: "created to do app 3", done: false},
        {id: 3, title: "created to do app 4", done: false},
      ]
    };
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0, // проверяем длинну массива и даем ИД последнего элеме, если там пусто = 0
        title: task,
        done: false
      });
      return tasks;
    });
  };

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id); // ищщим индекс положения в массиве
    this.setState(state => { // функция обновляет состояние элемента в массиве
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id); // ищщим индекс положения в массиве
    this.setState(state => { // функция обновляет состояние элемента в массиве
      let { tasks } = state; // определяем переменную tasks
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => task.done); // отфильтрованный массив где done - true
    const doneTasks =  tasks.filter(task => !task.done); // отфильтрованный массив где противоположное true 

    return(
     
      <div className="App">
        <h1 className='top'>Active tasks: {doneTasks.length}</h1> 
        {[...doneTasks, ...activeTasks].map(task => (

          <Task
            task={task}
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            key={TextTrackList.id} ></Task>
        ))}
        <TaskInput
          addTask={this.addTask}
        />
      </div>

    );
  }
}



export default App;
