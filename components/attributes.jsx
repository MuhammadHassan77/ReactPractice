import React from 'react';
// import { BrowserRouter, Link } from "react-router-dom";
// import {set_data} from "../store/action/index";
import $ from 'jquery';
// https://ok.ru/video/2076478081762

export default class Attributes extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         con: ""
    //     }
    // }

    Con_N = () => {
        if ($("input[name='P_condition']#New").trigger('Clicked')) {
            $("input[name='P_condition']#New").attr("clicked", "true");
            $("input[name='P_condition']#New").css({ "border-color": "#00a49f", "color": "rgb(52 96 95)", "background-color": "aqua" });
            $("input[name='P_condition']#Used").css({ "border-color": "", "color": "", "background-color": "" });
            $("input[name='P_condition']#Used").attr("clicked", "false");
        }
    }

    Con_U = () => {
        if ($("input[name='P_condition']#Used").trigger('Clicked')) {
            $("input[name='P_condition']#Used").attr("clicked", "true");
            $("input[name='P_condition']#Used").css({ "border-color": "#00a49f", "color": "rgb(52 96 95)", "background-color": "aqua" });
            $("input[name='P_condition']#New").css({ "border-color": "", "color": "", "background-color": "" });
            $("input[name='P_condition']#New").attr("clicked", "false");
        }
    }

    TypeA = () => {
        if ($("input[name='P_type']#A").trigger('Clicked')) {
            $("input[name='P_type']#A").attr("clicked", "true");
            $("input[name='P_type']#A").css({ "border-color": "#00a49f", "color": "rgb(52 96 95)", "background-color": "aqua" });
            $("input[name='P_type']#B").css({ "border-color": "", "color": "", "background-color": "" });
            $("input[name='P_type']#B").attr("clicked", "false");
        }
    }

    TypeB = () => {
        if ($("input[name='P_type']#B").trigger('Clicked')) {
            $("input[name='P_type']#B").attr("clicked", "true");
            $("input[name='P_type']#B").css({ "border-color": "#00a49f", "color": "rgb(52 96 95)", "background-color": "aqua" });
            $("input[name='P_type']#A").css({ "border-color": "", "color": "", "background-color": "" });
            $("input[name='P_type']#A").attr("clicked", "false");
        }
    }

    handle_AD_title = () => {
        let AD_title = $("#AD_title").val().trim();

        if (AD_title.length > 4) {

            $("#AD_title").css("border-color", "rgb(13 214 236)")
            $(".title").removeClass("text-danger");
            $(".title").addClass("text-muted");
            $(".title").text("Mention the key features of your item (e.g. brand, model, age, type)");
            return AD_title;
        } else {

            $("#AD_title").css("border-color", "red")
            $(".title").addClass("text-danger");
            $(".title").removeClass("text-muted");
            $(".title").text("A minimum length of 5 characters is required.");
            return "";

        }
    }

    handle_AD_description = () => {

        let AD_description = $("#AD_description").val().trim();

        if (AD_description.length > 20) {

            $("#AD_description").css("border-color", "rgb(13 214 236)")
            $(".description").removeClass("text-danger");
            $(".description").addClass("text-muted");
            $(".description").text("Include condition, features and reason for selling");
            return AD_description;

        } else {

            $("#AD_description").css("border-color", "red")
            $(".description").addClass("text-danger");
            $(".description").removeClass("text-muted");
            $(".description").text("A minimum length of 20 characters is required.");
            return "";
        }
    }

    isNotEmpty = () => {

        let P_con = $("input[name='P_condition']").filter("[clicked='true']").val();
        let P_type = $("input[name='P_type']").filter("[clicked='true']").val();
        let AD_title = this.handle_AD_title();
        let AD_description = this.handle_AD_description();
        let AD_price = $("#AD_price").val();
        let AD_location = $("#AD_location").val();

        console.log(P_con, P_type, AD_title, AD_description, AD_price, AD_location);

        if (P_con === '' || P_type === '' || AD_title === '' || AD_description === '' || AD_price === '' || AD_location === '') {
            $("#notify").html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>All Fields Are Required!!</div>');
            return false;
            // $("#postAdv").attr("disabled","disable");
            // window.location.assign("");
        } else {
            $("#notify").html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>AD Posted Successfully!!</div>');
            return true;
        }

    }
    postAd = (e) => {

        // let check = this.isNotEmpty();

        // if (check === true) {
        //     e.preventDefault();
        //     $("#postAdv").removeAttr("disabled");
        //     $("#postAdv").css({ "cursor": "pointer" });

        // } else {
        //     e.preventDefault();
        //     $("#postAdv").attr("disabled", "disabled");
        // }

        // this.setState({
        //     con: P_con,
        // })
        // setTimeout(() => {
        //     console.log(this.state)
        // }, 3000)

    }

    prevention = (e) => {

        // $("#AD_price").attr("pattern","^\D+$");
        e.key === "e" && e.preventDefault();
        e.key === 'E' && e.preventDefault();
        e.key === '.' && e.preventDefault();
        e.key === '-' && e.preventDefault();
        e.key === '+' && e.preventDefault();
        e.key === ' ' && e.preventDefault();

    }

    // addCommas = (e) => {
    //     // var str = e.target.value;
    //     // var p = document.getElementById("AD_price").value;
    //     // p = str.replace(/^0+/, '').replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     // // p=toString(p);
    //     // // $("#AD_price").val(p);
    //     // console.log(typeof p);
    // }


    render() {
        // $.map(this.props.adv, (v, i) => {
        // console.log(v, i)
        // console.log(this.props)
        // });
        return (
            <div className="container offset-lg-1 my-3">
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                    <a className="navbar-brand" href="/">
                        <h2 style={{ fontWeight: "bolder" }}>
                            <i className="fas fa-arrow-left mr-4 fa-xs"></i>O|X
                        </h2>
                    </a>
                </nav> */}

                <div className="col-lg-8 offset-lg-2" style={{ border: "1px solid #c3b8b8" }}>
                    <div className="container py-2 border-secondary">
                        <h3 className="text-muted text-center py-3">POST YOUR AD </h3>
                        <div id="notify"></div>
                        {/* <div className="my-3 col-lg-5 col-md-6 col-sm-12 col-xs-12"> */}
                        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">

                            <h5 className="text-dark">SELECTED CATEGORY</h5>
                            <div className="row">
                                <div className="text-muted ml-3 mr-1">ABC</div>
                                /
                                <div className="text-muted ml-1">DEF</div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 mb-3">
                            <h5 className="text-dark">INCLUDE SOME DETAILS</h5>
                            <div className="card my-1" style={{ display: "block" }}>
                                <p className="text-muted">Condition*</p>
                                <input type="button" name="P_condition" id="New" value="New" className="btn border-secondary px-2 mx-1" onClick={this.Con_N} />
                                <input type="button" name="P_condition" id="Used" value="Used" className="btn border-secondary px-2 mx-1" onClick={this.Con_U} />
                            </div>
                            <div className="card my-2" style={{ display: "block" }}>
                                <p className="text-muted">Type*</p>
                                <input type="button" name="P_type" id="A" value="A" className="btn border-secondary px-2 mx-1" onClick={this.TypeA} />
                                <input type="button" name="P_type" id="B" value="B" className="btn border-secondary px-2 mx-1" onClick={this.TypeB} />
                                {/* <input type="button" name="P_type" id="C" value="C" className="btn border-secondary px-2 mx-1" onClick={this.TypeC} /> */}
                            </div>
                            <div className="card p-2 my-2" style={{ display: "block" }}>
                                <p className="text-muted">Ad Title*</p>
                                <input type="text" id="AD_title" className="form-control col-lg-6 py-4" onChange={this.handle_AD_title} />
                                <small className="title mb-2"></small>

                                <p className="text-muted">Ad Decription*</p>
                                <textarea className="form-control col-lg-6" id="AD_description" onChange={this.handle_AD_description} style={{ minHeight: "110px", maxHeight: "110px" }}></textarea>
                                <small className="description">Include condition, features and reason for selling</small>
                            </div>

                            <h5 className="text-dark">SET A PRICE</h5>
                            <p className="text-muted">Price</p>
                            <div className="row">
                                <span className="pt-3 mx-3 text-dark">Rs</span>
                                <input type="number" id="AD_price" className="form-control col-lg-5 my-2 py-4" min="0" onKeyPress={(e) => this.prevention(e)} />
                            </div>

                            <sub className="text-muted">This field is manditory</sub>

                            <h5 className="text-dark">CONFIRM YOUR LOCATION</h5>
                            <p className="text-muted">State*</p>
                            {/* <input type="number" className="form-control col-lg-5" min="0" /> */}
                            <select id="AD_location" className="form-control col-lg-6">
                                <option></option>
                                <option value="Sindh">Sindh</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Balouchistan">Balouchistan</option>
                                <option value="Khyber Pakhtonkhwa">Khyber Pakhtonkhwa</option>
                                <option value="Gilgit Baltistan">Gilgit Baltistan</option>
                                <option value="Azad Kashmir">Azad Kashmir</option>
                            </select>

                            <sub className="text-danger">This field is manditory</sub>
                            <div className="col-lg-12">
                                <input type="submit" id="postAdv" className="btn btn-secondary btn-md mt-2 px-4" value="Post" onClick={this.isNotEmpty} onMouseOver={(e) => this.postAd(e)} style={{ cursor: "not-allowed" }} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

