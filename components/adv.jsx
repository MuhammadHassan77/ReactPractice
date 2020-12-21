import React from 'react';
import { Link } from "react-router-dom";
// import img from './hero_bg.jpg';
import $ from 'jquery';

export default class Advertisement extends React.Component {
    // constructor() {
    //     super()
    // }
    liked = (e) => {
        $("#" + e.target.id).toggleClass("fa-heart-o fa-heart");
        if ($("#" + e.target.id).hasClass("fa-heart")) {
            $("#" + e.target.id).attr("liked", true)
        } else {
            $("#" + e.target.id).attr("liked", false)
        }
    }
    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                {/* <img src={img} alt="img" id="banner" className="img-fluid" width="100%" height="240px" /> */}
                <div className="container py-5">
                    <h3>Fresh recommendations</h3>
                    <div className="row py-5">
                        {
                            this.props.adv.map((v, i) => {
                                return <div className="card my-3 col-lg-3 col-md-4 col-sm-6 p-2" key={i}>
                                    {/* <BrowserRouter> */}
                                    <div className="w-100">
                                        <div className="col-lg-4 col-md-4 col-sm-2 pl-2 m-1" style={{ position: "absolute", backgroundColor: "rgb(255, 206, 50)", height: "22px", fontSize: "0.8em", color: "black" }}>
                                            FEATURED
                                            </div>
                                        <div className="col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-2 offset-sm-9" style={{ position: "absolute", fontSize: "1.4em", }}>
                                            <i className="fa fa-heart-o text-dark float-right mt-1" id={"like" + i} aria-hidden="true" onClick={(e) => this.liked(e)}></i>
                                        </div>
                                    </div>
                                    <Link to={`/preview/${v["id"]}`}>
                                        {/* <Link to={`/preview`}> */}
                                        <img src={this.props.images} alt="" className="card-img-top rounded" width="250px" height="144px" />
                                        <div className="card-body" style={{ borderLeft: "5px solid #ffce32", margin: "5px 0" }}>
                                            <h6 className="card-title">
                                                <strong className="text-muted">RS : {v["price"]}</strong>
                                            </h6>
                                            <small className="card-text text-muted">{v["description"]} for sale</small>
                                            <div className="divider" />
                                            <small className="card-text text-muted mr-4">{v["location"]}</small>
                                            <small className="card-text text-muted ml-5">{v["date"]}</small>
                                        </div>
                                    </Link>
                                    {/* </BrowserRouter> */}
                                </div>
                            })
                        }
                    </div>
                </div>
            </React.Fragment >

        )
    }
}

