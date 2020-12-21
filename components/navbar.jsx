import React from 'react';
import { Link } from 'react-router-dom';
import sell_button from './sell_button.PNG';
export default class Navbar extends React.Component {
  // constructor() {
  //   super()
  //   // this.state = {
  //   // }
  // }
  // getSearchValue = (e) => {
  //   var searchQuery = e.target.value;
  //   searchQuery = searchQuery.toLowerCase();
  //   var city = this.props.city.toString().toLowerCase();
  //   if (city.search(searchQuery) !== -1) {
  //     //   // e.target.value=
  //     //   console.log(e.target.value[city.search(/e.target.value/i)]);
  //     //   console.log(city[city.search(/e.target.value/i)]);
  //     console.log(city.search(searchQuery))
  //     console.log("IF")
  //   } else {
  //     console.log(city.search(searchQuery))
  //     console.log("ELSE")

  //   }
  //   // console.log(city.search(e.target.value))
  //   console.log(city)
  //   // console.log(searchQuery);
  // }
  render() {
    // this.props.province.map((v, i) => {
    //   console.log(v,i)
    // })
    // console.log(this.props)
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm position-fixed bg-light navbar-light w-100"
          style={{ "zIndex": "10" }}>
          <a href="/" className="navbar-brand">
            <h2 style={{ fontWeight: "bolder" }}>O|X</h2>
          </a>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-12">
              <ul className="navbar-nav">
                <li className="nav-item dropdown col-3">
                  <div className="d-flex p-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ "border": "3px solid black", "borderWidth": "3px" }}>

                    <i className="fa fa-search fa-lg" style={{ "margin": "12px 0px 0px 5px" }}></i>
                    <input type="text" id="searchRegion" className="form-control nav-link dropdown-toggle border-0"
                      placeholder="Search city, area ..." style={{ cursor: "auto", "width": "80%" }} />
                    <i className="fa fa-angle-down fa-2x"></i>

                    <div className="dropdown-menu" aria-labelledby="searchRegion">
                      <button className="dropdown-item text-muted">
                        <i className="fa fa-map-marker mr-2"></i>  Recent Location
                    </button>
                      <div style={{ height: '30px', overflowY: 'scroll' }}>
                        {
                          this.props.city.map((v, i) => {
                            return <button className="dropdown-item text-muted" key={i}>
                              <i className="fa fa-map-marker mr-2"></i>  {v}
                            </button>
                          })
                        }
                      </div>
                      <div className="dropdown-divider" />
                      <button className="dropdown-item text-muted">
                        <i className="fa fa-map-marker mr-2"></i>  Popular Location
                    </button>
                      {
                        this.props.province.map((v, i) => {
                          return <button className="dropdown-item text-muted" key={i}>
                            <i className="fa fa-map-marker mr-2"></i>  {v}
                          </button>
                        })
                      }
                    </div>
                  </div>
                </li>
                <li className="nav-item col-lg-6 col-md-4 col-sm-2">
                  <div className="col-lg-12 d-flex p-0" style={{ "border": "3px solid black", "borderWidth": "3px", "backgroundColor": "#002f34" }}>
                    <input type="text" id="searchField" className="form-control border-0" placeholder="Find Cars, Mobile Phones and more..." onChange={(e) => this.getSearchValue(e)} style={{ "borderRadius": "0px" }} />
                    <button type="button" className="btn btn-sm col-lg-1 col-md-1 col-sm-12" onKeyPress={() => this.state.getValue}>
                      <i className="fas fa-search fa-lg text-white"></i>
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <i className="fa fa-comment-o fa-lg mt-3 mx-3"></i>
                </li>
                <li className="nav-item">
                  <i className="fa fa-bell-o fa-lg mt-3 mx-3"></i>
                </li>
                <li className="nav-item dropdown">
                  <div className="" style={{ width: "55px" }} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-circle fa-2x mt-2  text-danger"></i>
                    <i className="fas fa-angle-down fa-lg px-1" ></i>
                  </div>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <ul className="list-group" style={{ width: "280px" }}>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col-lg-3">
                            <i className="fas fa-circle fa-3x mt-2 ml-1 text-danger" aria-hidden="true"></i>
                          </div>
                          <div className="col-lg-8">
                            <sup>Salam</sup>
                            <h6>Muhammad Hassan</h6>
                            <span>View and edit profile</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-copy mr-2" aria-hidden="true"></i>
                          My Ads
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-clipboard mr-2" aria-hidden="true"></i>
                            Buy Business Package
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-pager mr-2" aria-hidden="true"></i>
                            Bought Package & Billings
                      </li>
                      <li className="dropdown-divider"></li>
                      <li className="list-group-item">
                        <i className="fas fa-question-circle mr-2" aria-hidden="true"></i>
                          Help
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-cog mr-2" aria-hidden="true"></i>
                        Settings
                      </li>
                      <div className="dropdown-divider"></div>
                      <li className="list-group-item">
                        <i className="fas fa-download mr-2" aria-hidden="true"></i>
                        Install OLX Lite App
                      </li>
                      <div className="dropdown-divider"></div>
                      <li className="list-group-item">
                        <i className="fa fa-sign-out mr-2" aria-hidden="true"></i>
                        Logout
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item  mx-1">
                  {/* <BrowserRouter> */}
                  <Link to="/post">
                    <img className="ml-3" src={sell_button} width="100px" alt="" />
                    {/* <span className="btn rounded-pill btn-primary mt-1 px-3">
                      <i className="fas fa-plus m-2"></i> SELL
                      </span> */}
                  </Link>
                  {/* </BrowserRouter> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
