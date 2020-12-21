import React from 'react';
import { Link } from "react-router-dom";
// import $ from 'jquery';


export default class Advertisement extends React.Component {
    render() {
        // $.map(this.props.adv, (v, i) => {
        // console.log(v, i)
        // console.log(this.props)
        // });
        return (
            <div className="container">
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                    <a className="navbar-brand" href="/">
                        <h2 style={{ fontWeight: "bolder" }}>
                            <i className="fas fa-arrow-left mr-4 fa-xs"></i>O|X
                        </h2>
                    </a>
                </nav> */}

                <div className="card">
                    <h3 className="text-muted text-center py-3">POST YOUR AD </h3>
                    <div className="row py-2 border-secondary">

                        <div className="card ml-5 col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <h5 className="text-muted">CHOOSE A CATEGORY</h5>
                            {
                                this.props.categories.map((v, i) => {
                                    return <div className="btn-group dropright" key={i}>
                                        <button type="button" className="btn text-left py-2 border-secondary text-muted" style={{ fontSize: "1.2em" }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {v} <i className="fas fa-angle-right"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            {
                                                this.props.subcategories[v].map((vl, ind) => {
                                                    return <div className="btn-group col-lg-12" key={ind}>
                                                        {/* onClick={() => console.log(this.props.categories[i], vl)} */}
                                                        {/* <BrowserRouter> */}
                                                        {/* <Link to={`/post/attributes/${v}/${vl}`} params={{ testvalue: "hello" }} className="text-muted"> */}
                                                        <Link to={`/post/attributes`} className="text-muted">

                                                            <button type="button" className="btn text-left py-2 border-secondary text-muted" style={{ width: '380px' }}>
                                                                {vl}
                                                            </button>

                                                        </Link>
                                                        {/* </BrowserRouter> */}
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

