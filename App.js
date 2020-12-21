import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './components/navbar.jsx';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer';
import Post from './components/post.jsx';
import { Switch, Route } from 'react-router-dom';
import Attributes from './components/attributes.jsx';
// import { set_data } from './store/action'
// import state  from './store/reducer/index'
// import Preview from './components/preview.jsx';
// import Attributes from './components/attributes.jsx';
// import Advertisement from './components/adv.jsx';

class App extends Component {
    render() {
        // console.log(this.props)
        return (

            <Switch>
                <React.Fragment>
                    <div className="d-block">
                        <div className="col-lg-12 col-sm-6 pl-0">
                            <Navbar city={this.props.city} province={this.props.province}  categories={this.props.categories} subcategories={this.props.subcategories} />
                        </div>
                        <div className="col-lg-12 col-sm-6 pt-5">
                            <Header categories={this.props.categories} subcategories={this.props.subcategories} />
                        </div>
                    </div>

                    {/* <Main categories={this.props.categories} subcategories={this.props.subcategories} adv={this.props.adv} /> */}
                    <Route exact path="/post" render={(props) => <Post {...props} categories={this.props.categories} subcategories={this.props.subcategories} />} />
                    <Route path="/post/attributes" render={(props) => <Attributes {...props} categories={this.props.categories} subcategories={this.props.subcategories} />} />
                    <Route path="/" render={(props) => <Main {...props} categories={this.props.categories} subcategories={this.props.subcategories} adv={this.props.adv} />} />

                    {/* <Route path="/" component={Footer} /> */}

                    <Footer />
                </React.Fragment>
            </Switch >
        );
    }
}


const mapStateToProps = (state) => {
    return {
        province: state.province,
        city: state.city,
        categories: state.categories,
        subcategories: state.subcategories,
        adv: state.adv,
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     set_data: (data) =>
//         dispatch(set_data(data))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App2);

export default connect(mapStateToProps, null)(App);
