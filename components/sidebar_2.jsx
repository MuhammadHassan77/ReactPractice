import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import bgImg from './sidebarImg.jpg';
import $ from 'jquery';
export default function Sidebar2() {

    let expand1 = () => {
        $(".ch1").toggleClass('fa-chevron-down fa-chevron-right');
    }
    let expand2 = () => {
        $(".ch2").toggleClass('fa-chevron-down fa-chevron-right');
    }
    let expand3 = () => {
        $(".ch3").toggleClass('fa-chevron-down fa-chevron-right');
    }

    let sidebarToggler = () => {
        $(".sidebar").toggleClass("col-md-1 col-md-3");
        $(".mainDiv").toggleClass("col-md-11 col-md-9");
        $(".toggleName").toggleClass("d-inline d-none");
        $(".fa-chevron-right").toggleClass("d-inline d-none");
        $(".uncollapsedLink").toggleClass("d-none d-block");
        $(".collapsedLink").toggleClass("d-inline d-none");
        $("div.list-group-item").toggleClass("text-center ");
        $("div.card-header").toggleClass("text-center ");
        $("div.card-footer").toggleClass("text-center ");
    }
    let toggleImg = () => {
        $(`.myBgImg`).slideToggle(100)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 sidebar bg-dark overflow-auto" style={{ height: "100%", zIndex: 11 }}>

                    <img src={bgImg} alt="bg-img" className="myBgImg img-fluid"
                        style={{ height: "100%", objectFit: 'cover', objectPosition: 'center', position: 'absolute', opacity: .3, left: 0, top: 0, }} />

                    <Card className="bg-transparent">
                        <Card.Body className="px-0">
                            <Card.Title className="text-muted ml-lg-3 toggleName d-inline" as="h4">
                                Pro Sidebar
                            </Card.Title>
                            <Card.Title className="text-muted ml-lg-3 collapsedLink d-none" as="h5">
                                Pro...
                            </Card.Title>
                            <hr className="dropdown-divider" style={{ borderTop: "1px solid rgb(181 183 184)" }} />

                            <ListGroup>
                                <a href="/">
                                    <ListGroup.Item className="border-0 bg-transparent pl-md-0">
                                        <Badge variant="secondary" className="rounded-pill" style={{ background: "hsla(0,0%,100%,.05)" }}>
                                            <i className="fa fa-tachometer text-white p-1"></i> </Badge>
                                        <span className="m-1 text-muted toggleName d-inline"> Dashboard </span>
                                    </ListGroup.Item>
                                </a>
                                <a href="/">
                                    <ListGroup.Item className="border-0 bg-transparent pl-md-0">
                                        <Badge variant="secondary" className="rounded-pill" style={{ background: "hsla(0,0%,100%,.05)" }}>
                                            <i className="fa fa-store text-white p-1"></i> </Badge>
                                        <span className="m-1 text-muted toggleName d-inline"> Store </span>
                                    </ListGroup.Item>
                                </a>
                            </ListGroup>

                            <div className="mt-5 px-0">
                                <Accordion defaultActiveKey="0" variant="dark">
                                    <Card className="bg-dark text-muted border-0 bg-transparent">
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="pl-md-0" onClick={expand1}>
                                            <Badge variant="secondary" className="rounded-pill" style={{ background: "hsla(0,0%,100%,.05)" }}>
                                                <i className="fa fa-book text-white p-1"></i> </Badge>
                                            <span className="m-2 toggleName d-inline"> Pages </span>
                                            <i className="fa fa-chevron-right font-weight-bolder ch1 d-inline" style={{ float: "right" }}></i>
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
                                    <Card className="bg-dark text-muted border-0 bg-transparent">
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="pl-md-0" onClick={expand2}>
                                            <Badge variant="secondary" className="rounded-pill" style={{ background: "hsla(0,0%,100%,.05)" }}>
                                                <i className="fa fa-shopping-cart text-white p-1"></i> </Badge>
                                            <span className="m-2 toggleName d-inline"> Shops </span>
                                            <i className="fa fa-chevron-right font-weight-bolder d-inline ch2" style={{ float: "right" }}></i>
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
                                    <Card className="bg-dark text-muted border-0 bg-transparent">
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="pl-md-0" onClick={expand3}>
                                            <Badge variant="secondary" className="rounded-pill" style={{ background: "hsla(0,0%,100%,.05)" }}>
                                                <i className="fa fa-diamond text-white p-1"></i> </Badge>
                                            <span className="m-2 toggleName d-inline"> Gems </span>
                                            <i className="fa fa-chevron-right font-weight-bolder d-inline ch3" style={{ float: "right" }}></i>
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
                            </div>

                        </Card.Body>
                        <hr className="dropdown-divider" style={{ marginTop: "180px", borderTop: "1px solid rgb(181 183 184)" }} />
                        <Card.Footer className="pl-md-0">
                            <a href="https://github.com/MuhammadHassan77/ReactPractice/blob/main/components/sidebar_2.jsx"
                                className="btn rounded-pill text-muted my-2 uncollapsedLink mx-auto d-block w-75" style={{ background: "hsla(0,0%,100%,.05)", border: "1px solid rgb(181 183 184)" }}>
                                <i className="fa fa-github text-white mr-1"></i> <span> View Source </span>
                            </a>
                            <a href="https://github.com/MuhammadHassan77/ReactPractice/blob/main/components/sidebar_2.jsx"
                                className="text-muted my-3 collapsedLink d-none mt-5">
                                <i className="fa fa-github text-white ml-2"></i> <span className="toggleName d-inline"> View Source </span>
                            </a>
                        </Card.Footer>
                    </Card>
                </div>

                <div className="col-md-9 px-5 overflow-auto mainDiv" style={{ height: "100%" }}>
                    <Card>
                        <Card.Header as="h1">
                            <i className="fab fa-react text-info"></i> React Pro Sidebar
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                React sidebar library with dropdown menus and number of nested submenus
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

                    <Form className="mt-4 p-2">
                        <Form.Check className="my-3" type="switch" id="sidebarToggler" label="Collapsed" onClick={sidebarToggler} />
                        <Form.Check className="my-3" type="switch" id="toggleImg" label="Background Image" onClick={toggleImg} defaultChecked />
                    </Form>

                    <footer style={{ marginTop: "250px" }}>
                        <div className="text-center">
                            <p>
                                © 2021 made with <i className="fa fa-heart text-danger"></i> by - Muhammad Hassan
                            </p>
                        </div>
                        <div className="text-center">
                            <p>
                                <a href="https://github.com/MuhammadHassan77/ReactPractice/blob/main/components/sidebar_2.jsx" className="text-dark">
                                    <Badge>
                                        GitHub <i className="fa fa-github"></i>
                                    </Badge>
                                </a>
                            </p>
                        </div>
                    </footer>
                </div>

            </div>

        </div>
    )

}
