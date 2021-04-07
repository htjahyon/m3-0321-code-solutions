import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('https://localhost:3000/api/todos', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
      .catch(err => console.error('getAllTodos failed!', err));
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
    fetch('https://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo),
      data: {
        task: newTodo.task,
        isCompleted: false
      }
    })
      .then(res => res.json())
      .then(data => {
        const todosArray = this.state.todos;
        todosArray.push(data);
        this.setState({ todo: todosArray });
      })
      .catch(err => console.error('addTodo failed!', err));
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const match = element => element.todoId === todoId;
    const index = this.state.todos.findIndex(match);
    const notCompleted = !this.state.todos[index].isCompleted;
    fetch(`https://localhost:3000/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.todos[todoId]),
      data: {
        task: this.state.todos[index].task,
        isCompleted: notCompleted
      }
    })
      .then(res => res.json())
      .then(data => {
        const todosArray = this.state.todos;
        todosArray[index] = data;
        this.setState({ todos: todosArray });
      })
      .catch(err => console.error('toggleCompleted failed!', err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
