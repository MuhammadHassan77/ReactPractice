import React from 'react';

export default class Header extends React.Component {
    // constructor() {
    //     super()
    //     // this.state = {

    //     // }
    // }
    render() {
        // console.log(this.props.categories)
        // this.props.categories.map((v, i) => {
        //     console.log('CAT => ' + v, i)
        //     console.log('SubCAT => ' + this.props.subcategories[v], i)
        //     // this.props.subcategories[v].map((vl, i) => {
        //     //         //         vl.map((val, i) => {
        //     // console.log('SUBCAT => ' + this.props.subcategories)
        //     //         //             console.log(this.state.categories)
        //     // })
        // })
        // })

        return (
            <div className="ml-auto pt-1">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <button className="navbar-toggler ml-auto mt-2" type="button" data-toggle="collapse" data-target="#headerSupportedContent" aria-controls="headerSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="headerSupportedContent">

                        <div className="">
                            <ul className="navbar-nav">
                                <li className="list-group-item dropdown">
                                    <div className="nav-link text-muted" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontWeight: "bold" }}>
                                        ALL Categories <i className="fas fa-angle-down mx-1" style={{ fontSize: "1.3em" }}></i>
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div className="container" style={{/* width: "1330px" */ }}>
                                            <div className="row" style={{ flexWrap: "nowrap" }}>
                                                {/* <ul className="list-group list-group-horizontal"> */}
                                                {
                                                    this.props.categories.map((v, i) => {
                                                        return <div className="col-lg-3 col-sm-12 mx-2" key={i}>
                                                            {/* <li className="list-group-item" id={i} style={{ marginRight: "60px" }}> */}
                                                            <ul className="" id={i} style={{ padding: ".75rem 1.25rem", listStyleType: "none" }}>
                                                                <h6 className="nav-link" style={{ fontWeight: "bolder", paddingLeft: "2.8em" }} id={i}>
                                                                    {v}
                                                                </h6>
                                                                {
                                                                    this.props.subcategories[v].map((val, ind) => {
                                                                        return <li className="px-5 text-muted" id={ind} key={ind}>
                                                                            {val}
                                                                        </li>
                                                                    })
                                                                }
                                                            </ul>
                                                            {/* </li> */}
                                                        </div>
                                                    })
                                                }
                                                {/* </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link text-muted" href="/categories" style={{ color: "black " }}>Cars</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link text-muted" href="/categories" style={{ color: "black " }}>Mobiles</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link text-muted" href="/categories" style={{ color: "black " }}>Motorcycles</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link text-muted" href="/categories" style={{ color: "black " }}>Houses</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link text-muted" href="/categories" style={{ color: "black " }}>TV - Audio - Video</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link text-muted" href="/categories" style={{ color: "black " }}>Tablets</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link text-muted" href="/categories" style={{ color: "black " }}>Land&Pro</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >

        )
    }
}
