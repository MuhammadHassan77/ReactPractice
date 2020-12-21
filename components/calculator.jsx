import React from 'react';
// import { Link } from "react-router-dom";

export default class Calculator extends React.Component {
    ersValue = () => {
        var showValue = document.getElementById("showValue")
        showValue.value = showValue.value.substr(0, showValue.value.length - 1)
    }
    clrValue = () => {
        var showValue = document.getElementById("showValue")
        showValue.value = ''
    }
    getValue = (e) => {

        var result, exp;

        var showValue = document.getElementById("showValue");
        // console.log();
        showValue.value += e.target.value
        exp = showValue.value;

        if (e.target.value === "=" && exp !== "") {
            if (exp.endsWith("+") || exp.endsWith("-") || exp.endsWith("*") || exp.endsWith("/")) {
                exp = exp.substr(0, exp.length - 2);
                result = eval(exp);
                exp = "";
                showValue.value = result;
                console.log(result);
            } else {
                exp = exp.substr(0, exp.length - 1);
                result = eval(exp);
                exp = "";
                showValue.value = result;
                console.log(result);
            }
        }
    }
    // goTo = () => {
    //     this.props.history.push('/todo.jsx');
    // }
    render() {
        return (
            <div className="col-lg-4 offset-lg-4 py-5">
                {/* <button onClick={() => this.props.history.push('/todo.jsx')} > Go to Todo</button> */}
                <div style={{ textAlign: "center", border: "1px solid lightblue" }} className="px-3 py-5">
                    <h1 className="text-primary">Calculator</h1>
                    <input className="form-control col-lg-10 offset-lg-1 my-3" type="text" id="showValue" pattern="" />
                    <button className="btn btn-secondary my-1 col-lg-4" value="X" style={{ width: "45%" }}
                        onClick={() => this.ersValue()}>X</button>
                    <button className="btn btn-danger my-1 col-lg-4 ml-3" style={{ width: "45%" }}
                        onClick={() => this.clrValue()}>C</button>
                    <div>
                        <button className="btn btn-primary mx-1 my-1" value="7"
                            onClick={(e) => this.getValue(e)}>7</button>
                        <button className="btn btn-primary mx-1 my-1" value="8"
                            onClick={(e) => this.getValue(e)}>8</button>
                        <button className="btn btn-primary mx-1 my-1" value="9"
                            onClick={(e) => this.getValue(e)}>9</button>
                        <button className="btn btn-primary mx-1 my-1" value="/"
                            onClick={(e) => this.getValue(e)}>/</button>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-1 my-1" value="4"
                            onClick={(e) => this.getValue(e)}>4</button>
                        <button className="btn btn-primary mx-1 my-1" value="5"
                            onClick={(e) => this.getValue(e)}>5</button>
                        <button className="btn btn-primary mx-1 my-1" value="6"
                            onClick={(e) => this.getValue(e)}>6</button>
                        <button className="btn btn-primary mx-1 my-1" value="*"
                            onClick={(e) => this.getValue(e)}>x</button>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-1 my-1" value="1"
                            onClick={(e) => this.getValue(e)}>1</button>
                        <button className="btn btn-primary mx-1 my-1" value="2"
                            onClick={(e) => this.getValue(e)}>2</button>
                        <button className="btn btn-primary mx-1 my-1" value="3"
                            onClick={(e) => this.getValue(e)}>3</button>
                        <button className="btn btn-primary mx-1 my-1" value="+"
                            onClick={(e) => this.getValue(e)}>+</button>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-1 my-1" value="0"
                            onClick={(e) => this.getValue(e)}>0</button>
                        <button className="btn btn-primary mx-1 my-1" value="."
                            onClick={(e) => this.getValue(e)}>.</button>
                        <button className="btn btn-primary mx-1 my-1" value="="
                            onClick={(e) => this.getValue(e)}>=</button>
                        <button className="btn btn-primary mx-1 my-1" value="-"
                            onClick={(e) => this.getValue(e)}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}
