import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
export default function Sidebar() {

  let expand1 = () => {
    $(".ch1").toggleClass('fa-chevron-down fa-chevron-right');
  }
  let showHide = () => {
    $(".sidebar").addClass("d-none");
    $(".tBtn").toggleClass("d-block d-none");
    $(".mainDiv").removeClass("col-md-9");
    $(".mainDiv").addClass("col-md-12");
  }
  let hideShow = () => {
    $(".sidebar").removeClass("d-none");
    $(".tBtn").toggleClass("d-none d-block");
    $(".mainDiv").removeClass("col-md-12");
    $(".mainDiv").addClass("col-md-9");
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar bg-dark overflow-auto mb-5" style={{ height: "740px" }}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              React Pro Sidebar
            </Navbar.Brand>
            <button className="btn ml-lg-5" onClick={showHide}>
              <i className="fa fa-bars mx-2 text-white fa-lg"></i>
            </button>
          </Navbar>

          <hr className="dropdown-divider" style={{ borderTop: "1px solid rgb(33 36 38)" }} />

          <Card className="bg-dark">
            <Card.Body className="row">
              <div className="col-3">
                <i className="fa fa-user fa-4x text-muted"></i>
              </div>
              <div className="col-9">
                <Card.Text className="text-muted ml-3 mb-1" as="h4">
                  John Wick
                </Card.Text>
                <Card.Text className="text-muted ml-3 mb-1" as="h6">
                  Administrator
                  </Card.Text>
                <Card.Text className="text-muted ml-3 mb-0" style={{ fontSize: "12px" }}>
                  <i className="fa fa-circle text-success"></i> Onilne
                </Card.Text>
              </div>
            </Card.Body>
          </Card>

          <hr className="dropdown-divider" style={{ borderTop: "1px solid rgb(33 36 38)" }} />

          <div className="row text-white mx-auto p-1" style={{ width: "95%", borderRadius: "5px", border: "1px solid rgb(33 36 38)" }}>
            <input type="text" className="form-control bg-dark text-white border-0 col-10" placeholder="Search..." />
            <button type="button" className="btn btn-dark col-2 text-muted" style={{ borderLeft: "1px solid rgb(33 36 38)" }}>
              <i className="fa fa-search"></i>
            </button>
          </div>

          <hr className="dropdown-divider" style={{ borderTop: "1px solid rgb(33 36 38)" }} />

          <ul className="list-group">
            <Accordion defaultActiveKey="0" variant="dark">
              <Card className="bg-dark text-muted border-0">
                <Accordion.Toggle as={Card.Header} eventKey="1" onClick={expand1}>
                  <Badge variant="secondary"> <i className="fa fa-tachometer-alt fa-lg text-info p-1"></i> </Badge>
                  <span className="m-2"> Dashboard </span>
                  <i className="fa fa-chevron-right font-weight-bolder ch1" style={{ float: "right" }}></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hi 1</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hi 2</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hi 3</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion defaultActiveKey="0" variant="dark">
              <Card className="bg-dark text-muted border-0">
                <Accordion.Toggle as={Card.Header} eventKey="1" onClick={expand1}>
                  <Badge variant="secondary"> <i className="fa fa-shopping-cart fa-lg text-info p-1"></i> </Badge>
                  <span className="m-2"> E-Commerce </span>
                  <i className="fa fa-chevron-right font-weight-bolder ch1" style={{ float: "right" }}></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Product 1</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Product 2</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Product 3</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion defaultActiveKey="0" variant="dark">
              <Card className="bg-dark text-muted border-0">
                <Accordion.Toggle as={Card.Header} eventKey="1" onClick={expand1}>
                  <Badge variant="secondary"> <i className="fa fa-diamond fa-lg text-info p-1"></i> </Badge>
                  <span className="m-2"> Components </span>
                  <i className="fa fa-chevron-right font-weight-bolder ch1" style={{ float: "right" }}></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 1</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 2</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 3</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion defaultActiveKey="0" variant="dark">
              <Card className="bg-dark text-muted border-0">
                <Accordion.Toggle as={Card.Header} eventKey="1" onClick={expand1}>
                  <Badge variant="secondary"> <i className="fa fa-chart-line fa-lg text-info p-1"></i> </Badge>
                  <span className="m-2"> Charts </span>
                  <i className="fa fa-chevron-right font-weight-bolder ch1" style={{ float: "right" }}></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 1</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 2</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 3</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion defaultActiveKey="0" variant="dark">
              <Card className="bg-dark text-muted border-0">
                <Accordion.Toggle as={Card.Header} eventKey="1" onClick={expand1}>
                  <Badge variant="secondary"> <i className="fa fa-globe fa-lg text-info p-1"></i> </Badge>
                  <span className="m-2"> Maps </span>
                  <i className="fa fa-chevron-right font-weight-bolder ch1" style={{ float: "right" }}></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 1</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Component 2</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <hr className="dropdown-divider" style={{ borderTop: "1px solid rgb(33 36 38)" }} />

            <ListGroup>
              <ListGroup.Item className="bg-dark border-0" href="/">
                <Badge variant="secondary"> <i className="fa fa-book fa-lg text-info p-1"></i> </Badge>
                <span className="m-2 text-muted"> Documentation </span>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0" href="/">
                <Badge variant="secondary"> <i className="fa fa-calendar fa-lg text-info p-1"></i> </Badge>
                <span className="m-2 text-muted"> Calendar </span>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0" href="/">
                <Badge variant="secondary"> <i className="fa fa-folder fa-lg text-info p-1"></i> </Badge>
                <span className="m-2 text-muted"> Examples </span>
              </ListGroup.Item>

            </ListGroup>

            <ListGroup horizontal className="col-lg-3 col-md-4 fixed-bottom pr-0">
              <ListGroup.Item className="bg-dark w-100 px-md-2 text-center">
                <i className="fa fa-bell mx-2 text-muted"></i>
                <sup><Badge variant="warning">3</Badge></sup>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark w-100 px-md-2 text-center">
                <i className="fa fa-envelope mx-2 text-muted"></i>
                <sup><Badge variant="success">7</Badge></sup>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark w-100 px-md-2 text-center">
                <i className="fa fa-cog mx-2 text-muted"></i>
                <sup><i className="fa fa-circle text-danger"></i></sup>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark w-100 px-md-2 text-center" role="button">
                <i className="fa fa-power-off mx-2 text-muted"></i>
              </ListGroup.Item>
            </ListGroup>

          </ul>
        </div>

        <button className="btn btn-dark text-white mt-2 d-none tBtn position-fixed" onClick={hideShow} style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", zIndex: "1000" }}>
          <i className="fa fa-bars fa-lg"></i>
        </button>

        <div className="col-md-9 px-5 overflow-auto mainDiv" style={{ height: "740px" }}>
          <Card>
            <Card.Header as="h1">
              <i className="fab fa-react text-info"></i> React Pro Sidebar
            </Card.Header>
            <Card.Body>
              <Card.Text>This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework.
                <br />
                <br />
              You can find the complete code on <a href="https://github.com/MuhammadHassan77/ReactPractice/blob/main/components/sidebar.jsx" target="_blank">
                  Github</a> , it contains more themes and background image option
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Badge>
                <i className="fa fa-github"></i> Star
              </Badge>
              <Badge>617</Badge>
              <Badge>
                <i className="fa fa-github"></i> Fork
              </Badge>
              <Badge>625</Badge>
            </Card.Footer>
          </Card>
          <Alert show={true} variant="success">
            <Alert.Heading>New !</Alert.Heading>
            <p>
              New react pro sidebar library is now available on npm <Badge><i className="fa fa-github text-dark"></i> Star </Badge>
              <Badge>617</Badge>
            </p>
            <div className="d-flex">
              <a href="https://github.com/MuhammadHassan77/ReactPractice/blob/main/components/sidebar.jsx" target="_blank" className="col-1 mx-1">
                <Button className="pl-1" variant="primary">
                  Github
              </Button>
              </a>
              <a href="https://github.com/MuhammadHassan77/ReactPractice/blob/main/components/sidebar.jsx" target="_blank" className="col-1 mx-1">
                <Button className="pl-2" variant="success">
                  Demo
              </Button>
              </a>
            </div>
          </Alert>

        </div>

      </div>
    </div>
  )

}
