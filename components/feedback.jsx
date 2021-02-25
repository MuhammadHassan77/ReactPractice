import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import $ from 'jquery';
export default class Feedback extends Component {
    constructor() {
        super()
        this.state = {
        }
        this.worst = () => {
            $(".progress-bar").css({ 'width': '0%', 'background-color': '#dc3545' });
        }
        this.poor = () => {
            $(".progress-bar").css({ 'width': '26.5%', 'background-color': '#ffc107' });
        }
        this.average = () => {
            $(".progress-bar").css({ 'width': '51.5%', 'background-color': '#0d6efd' });
        }
        this.good = () => {
            $(".progress-bar").css({ 'width': '76.5%', 'background-color': '#0dcaf0' });
        }
        this.awesome = () => {
            $(".progress-bar").css({ 'width': '100%', 'background-color': '#198754' });
        }
        this.reset = () => {
            $(".progress-bar").css({ 'width': '76.5%', 'background-color': '#0dcaf0' });
        }
        $("body").css("background-color", "#6c757d");
    }
    render() {
        return (
            <div className="col-8 offset-2 bg-dark py-5 my-5">
                <h2 className="text-center text-secondary my-4">Feedback Component</h2>

                <div className="d-flex" onMouseLeave={this.reset}>
                    <div className="fa-angry offset-1 col-2 text-center" onMouseOver={this.worst}>
                        <i className="fa fa-angry text-danger fa-6x"></i>
                        <h6 className="text-danger">Worst</h6>
                    </div>
                    <div className="fa-frown col-2 text-center">
                        <i className="fa fa-frown text-warning fa-6x" onMouseOver={this.poor}></i>
                        <h6 className="text-warning">Poor</h6>
                    </div>
                    <div className="fa-meh col-2 text-center">
                        <i className="fa fa-meh text-primary fa-6x" onMouseOver={this.average}></i>
                        <h6 className="text-primary">Average</h6>
                    </div>
                    <div className="fa-laugh col-2 text-center">
                        <i className="fa fa-laugh text-info fa-6x" onMouseOver={this.good}></i>
                        <h6 className="text-info">Good</h6>
                    </div>
                    <div className="fa-smile-beam col-2 text-center">
                        <i className="fa fa-smile-beam text-success fa-6x" onMouseOver={this.awesome}></i>
                        <h6 className="text-success">Awesome</h6>
                    </div>
                </div>
                <div className="mx-auto" style={{ "width": "67%" }}>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} aria-valuenow={75}
                            aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
            </div>
        )
    }

}