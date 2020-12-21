import React from 'react';
import P_img from './hero_bg_pk.jpg';
import img from './hero_bg.jpg';
import { Route } from 'react-router-dom';
import $ from 'jquery';

import Preview from './preview.jsx';
import Advertisement from './adv.jsx';

export default class Main extends React.Component {
    componentDidMount() {
        //     // console.log($("img").hasClass("img-fluid"));
        let loc = window.location.href;
        // console.log(loc)
        if (loc === "http://localhost:3000/") {
            $(".img-fluid").show();
            // console.log("if ")
        } else {
            // console.log("else ")
            $(".img-fluid").hide();
        }
    }
    render() {
        // console.log(this.props)
        return (
            <React.Fragment>

                {/* <Switch> */}
                {/* <Route exact path="/post" render={() => <Post categories={this.props.categories} subcategories={this.props.subcategories} />} /> */}
                <img src={img} alt="img" className="img-fluid d-sm-none" width="100%" height="240px" />
                <Route exact path="/preview/:id" render={(props) => <Preview {...props} adv={this.props.adv} />} />
                <Route exact path="/" render={(props) => <Advertisement adv={this.props.adv} {...props} images={P_img} />} />
                {/* </Switch> */}
            </React.Fragment>
        )
    }
}
