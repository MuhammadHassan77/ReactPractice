import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "../components/calculator.jsx"
import Todo from "../components/todo.jsx"
export default class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Calculator}  />
                    <Route path="/todo.jsx" component={Todo}  />
                </Router>
            </div>
        )
    }
}