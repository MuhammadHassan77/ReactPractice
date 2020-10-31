import React from 'react';
import { Link } from "react-router-dom";
export default class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      task: ['abc', 'def', 'ghi'],
      value: ""
    }
  }
  addTodo = () => {
    if (this.state.value.trim() !== '') {
      this.setState({
        task: [...this.state.task, this.state.value],
        value: '',
      })
    }
  }

  editTodo = (i) => {
    var updated_val = prompt('Update', this.state.task[i]);
    this.state.task[i] = updated_val;
    this.setState({
      task: this.state.task
    })
    console.log(updated_val)
  }
  delTodo = (i) => {
    this.state.task.splice(i, 1)
    this.setState({
      task: this.state.task
    })
  }
  
  render() {
    let { task, value } = this.state
    return (
      <div>
        <Link to="/"> Go to Calculator</Link>

        <h1>TODO</h1>
        <input type="text" className="form-group py-1" maxLength="30" value={value} onChange={(e) => this.setState({ value: e.target.value })} placeholder="enter todo" />
        <button className="btn btn-primary  ml-2" onClick={this.addTodo}>Add</button>
        <ul style={{ listStyleType: "none", width: "450px" }} className="list-group">
          {task.map((v, i) => {
            return <li key={i} className="list-group-item-dark">
              {v}
              <button onClick={() => this.editTodo(i)} className="btn btn-secondary my-2 mx-2">Edit</button>
              <button onClick={() => this.delTodo(i)} className="btn btn-danger my-2  px-2 mx-2">Delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
