import React from 'react';
import { Link } from "react-router-dom";
export default class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      task: [],
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
    if (updated_val !== "") {
      this.setState({
        task: this.state.task
      })
    } else {
      this.state.task[i] = "";
    }
    // console.log(updated_val)
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
      <div className="col-lg-8 offset-lg-2 py-5">
        {/* <Link to="/"> Go to Calculator</Link> */}
        <h1 className="text-primary text-center">TODO</h1>
        <div className="col-lg-8 offset-lg-3 py-3">
          <input type="text" className="col-lg-6 py-2" maxLength="50" value={value} onChange={(e) => this.setState({ value: e.target.value })} placeholder="Enter todo" required />
          <button className="btn btn-primary col-lg-2 py-2" onClick={this.addTodo}>Add</button>
        </div>
        <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12">
          <ul style={{ listStyleType: "none", wordBreak: "break-word" }} className="list-group text-center">
            {task.map((v, i) => {
              return <li key={i} className="list-group-item-dark text-center">
                {v}
                <button onClick={() => this.editTodo(i)} className="btn btn-secondary my-2 mx-1">Edit</button>
                <button onClick={() => this.delTodo(i)} className="btn btn-danger my-2 mx-1" style={{ width: "75px" }}>Delete</button>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
