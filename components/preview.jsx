import React from 'react';
// import { Link } from "react-router-dom";
import P_img from './hero_bg_pk.jpg';
// import $ from 'jquery';
// import { Route } from 'react-router-dom';
// import Advertisement from './post';

export default class Preview extends React.Component {
  // constructor() {
  //   super()
  // }
  render() {
    var id = parseInt(this.props.match.params.id);
    let desc = this.props.adv.find(ad => ad.id === id)
    // console.log(typeof id);
    // console.log(abc);
    // console.log(this.props.adv[--id]);
    // console.log(this.props);
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-9">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={P_img} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={P_img} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={P_img} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="card my-5">
              <h5 className="text-muted">
                Details
              </h5>
              <div className="row">
                <div className="col-lg-6 text-muted pr-4">
                  Make
                  <span className="text-dark ml-5">Bike</span>
                </div>
                <div className="col-lg-6 text-muted pr-4">
                  Condition
                  <span className="text-dark ml-5">Used</span>
                </div>
              </div>
            </div>

            <div className="card my-5">
              <h5 className="text-muted">
                Description
              </h5>
              <div className="row ml-1">A</div>

            </div>

            <div className="card">
              <h5 className="text-dark my-4">Related Ads</h5>
              <div className="row py-2 pl-4">
                {/* <Route exact path={`/preview/${id}`} render={(props) => <Advertisement {...props} adv={this.props.adv} images={P_img} />} /> */}
                {
                  // this.props.adv.slice(0, 4).map((v, i) => {
                  //   return <Link to={`/preview/${v["id"]}`} key={i}>
                  //     <div className="card ml-1 text-muted" key={i}>
                  //       <img src={P_img} className="p-2" alt="..." width="190" height="145" />
                  //       <div className="card-body" key={i}>
                  //         <h6 className="card-title" key={i}>
                  //           Rs : {v["price"]} </h6>
                  //         <p className="card-text" >
                  //           {v["description"]}
                  //         </p>
                  //         <div className="row">

                  //           <small className="col-6" style={{ paddingRight: "0px" }}>
                  //             {v["location"]}
                  //           </small>
                  //           <small className="col-6" style={{ paddingRight: "0px" }}>
                  //             {v["date"]}
                  //           </small>

                  //         </div>

                  //       </div>
                  //     </div>
                  //   </Link>
                  // })
                }
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card my-3">
              <div className="card-body">
                <div className="card-title my-3" >
                  <h3 className="text-muted">
                    <strong className="text-muted">RS :
                    {desc["price"]}
                    </strong>
                  </h3>
                </div>
                <h6 className="card-text text-muted">
                  {desc["description"]} for sale
                  </h6>
                <div className="divider my-5" />

                <div className="row">
                  <div className="col-6 text-muted">
                    {desc["location"]}
                  </div>
                  <div className="col-6 text-muted">
                    {desc["date"]}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
