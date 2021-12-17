import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // первое состояние - пустая строка
            input: ""
        };
    }

    addTask = () => {
        const { input } = this.state; // определяем инпут
        if(input) {
            this.props.addTask(input); // выполняем функцию и передаем туда параметр инпута
            this.setState({ input: '' }); // очищаем инпут после состояния
            
        } 
    };

    handleEnter = event => {
        if(event.key === "enter") { // по ентеру
            this.addTask();
        }
    }

    inputChange = event => {
        this.setState({input: event.target.value});
    }

render() {
    const {input} = this.state;
    return (
    <div className='NewTasks'>
        <input
        id="mainInput"
         value={input} 
         onChange={this.inputChange}
         onKeyPress={this.handleEnter}

         />
        <button onClick={this.addTask}>Add</button>
    </div>
    )
    } 
}

export default TaskInput;