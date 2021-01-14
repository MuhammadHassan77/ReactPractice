import React, { Component } from 'react';
import logo from "./components/sell_button.PNG";
// import logo from "./avatar.jpg";
// import bootstrap_icon from './bootstrap_icon.ico'
import $ from 'jquery';

let full_name, profession, contact, address, goal, skills = [], hobbies = [], degrees = [], experiences = [], languages = [];

export default class Resume extends Component {
    constructor() {
        super()
        this.state = {
            full_name: "Muhammad Hassan",
            profession: "Software Engineer",
            contact: {
                email: "m.hassanshakh77@gmail.com",
                phone_num: "(022) 2611 649",
                address: "Flat #01 Mubeen Manzil, Hirabad, Hyd",
            },
            skills: [
                {
                    skill_name: "HTML 5",
                    skill_level: "75%"
                },
                {
                    skill_name: "CSS 3",
                    skill_level: "50%"
                },
                {
                    skill_name: "Javascript",
                    skill_level: "50%"
                },
                {
                    skill_name: "Bootstrap 4",
                    skill_level: "50%"
                },
                {
                    skill_name: "JQuery",
                    skill_level: "50%"
                },
                {
                    skill_name: "React Js",
                    skill_level: "25%"
                },
                {
                    skill_name: "React Native",
                    skill_level: "25%"
                },
            ],
            hobbies: [],
            languages: ["English", "Urdu", "Sindhi"],
            goal: `Seeking a challenging software engineering position in an organization
            that rewards dedication and proficiency in web development And
            to pursue a successful career in software development
            where skills in coding, troubleshooting, and testing will be useful in
            the delivery of state-of-the-art software solutions.`,
            degrees: [
                {
                    degree: "(BS) Bachelor in  Software Engineering",
                    institute: "University Of Sindh, Jamshoro, Pakistan",
                    Y_O_A: "2017",
                    Y_O_C: "2021"
                },
                {
                    degree: "Intermediate in Pre-Engineering",
                    institute: "Government Muslim Science College, Hyd",
                    Y_O_A: "2014",
                    Y_O_C: "2016"
                },
            ],
            experiences: [
                {
                    experience: "Intership As a ",
                    duration: "5 months",
                    position: "Junior Developer",
                    location: "Herosoft, Hyd"
                },
                {
                    experience: "Job As a ",
                    duration: "5 years",
                    position: "Developer",
                    location: "ABCBB, Hyd"
                }
            ],
            selectedFile: "",
        }
    }

    handleFileInput = (e) => {
        // handle validations
        // console.log(e.target.files);
        const file = e.target.files[0];
        console.log(file);
        // if (file.size > 1024)
        //     // onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        // else
        // //  onFileSelectSuccess(file);

        const formData = new FormData();
        console.log(formData.append("profile_img", file.name));
        console.log(formData);

        // formData.post("./components/", formData)
        //     .then((res) => {
        //         alert("File Upload success");
        //     })
        //     .catch((err) => alert("File Upload Error"));
    };

    addInfo = () => {

        full_name = $("#full_name").val().trim();
        profession = $("#profession").val().trim();
        goal = $("#goal").val().trim();
        contact = {
            email: $("#email").val().trim(),
            phone_num: $("#phone_num").val().trim(),
            address: $("#address").val().trim()
        }

        $(".skill").each(function () {
            let range = $(this).find("input[type=range]").val();
            if (range === "0" || range === "1") range = "25%";
            else if (range === "2") range = "50%";
            else if (range === "3") range = "75%";
            else range = "100%";
            skills.push({
                skill: {
                    skill_name: $(this).find("input[type=text]").val(),
                    skill_level: range
                }
            })
        })

        $(".hobby").each(function () {
            hobbies.push($(this).find("input[placeholder=Camping]").val());
        })

        $(".experience").each(function () {
            experiences.push({
                experience: $(this).find("input[placeholder='Experience As']").val(),
                duration: $(this).find("input[placeholder='Experience Duration']").val(),
                position: $(this).find("input[placeholder='Position']").val(),
                location: $(this).find("input[placeholder='Location']").val()
            })
        })

        $(".degree").each(function () {
            degrees.push({

                degree: $(this).find("input[placeholder=degree]").val(),
                institute: $(this).find("input[placeholder='Institute Name']").val(),
                Y_O_A: $(this).find("input[placeholder='Year Of Admission']").val(),
                Y_O_C: $(this).find("input[placeholder='Year Of Completion']").val()

            })
        })

        $(".language").each(function () {
            languages.push($(this).find("span").text())
        })

        if (full_name !== "" && profession !== "" && contact !== "" && goal !== "" && skills !== "" && languages !== "" && hobbies !== "" && experiences !== "" && degrees !== "") {
            this.setState({
                full_name: full_name,
                profession: profession,
                contact: contact,
                address: address,
                goal: goal,
                languages: languages,
                skills: [...skills],
                hobbies: [...hobbies],
                experiences: [...experiences],
                degrees: [...degrees],
            })
            $(".modal-content").html(`<div class="modal-header bg-success">
            <h5 class="modal-title" id="exampleModalLabel">Error!!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            Form Submitted Successfully!!
        </div>`)
            setTimeout(() => $("input[value='Cancel']").trigger("click"), 1000);
        } else {
            $(".modal-content").html(`<div class="modal-header bg-danger">
            <h5 class="modal-title" id="exampleModalLabel">Error!!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            All Fields Are Required!!
        </div>`)
        }
    }
    // setTimeout(() => {

    // console.log(
    // this.state.full_name,
    // this.state.profession,
    // this.state.email,
    // this.state.phone_num,
    // this.state.address,
    // this.state.goal,
    // this.state.skills,
    // this.state.hobbies,
    // this.state.experiences,
    // this.state.degrees
    // );
    // }, 2000)


    addSkill = () => {
        let i = $(".skills_section input[type='range']").length + 1;
        if (i < 10) {
            $(".skills_section").append(`<div class="mt-3 skill"><label htmlFor="skill${i}" class="text-muted"> Skill </label>
            <label id="removeskill${i}" class="text-muted float-right mr-5"> <i class="fa fa-times"></i> remove </label>
                <input type="text" id="skill${i}" class="form-control font-weight-bold text-muted my-2" placeholder="Designer" required />
                <label htmlFor="range_skill${i}" class="text-muted"> Skill Level </label> <input type="range" class="form-control-range" id="range_skill${i}" min="1" max="5" step="1" required /></div > `);
            $(`#removeskill${i} `).on("click", (e) => {
                ($(e.target.parentElement).remove());
            })
            // $(`#skill${ i } `).on("change", (e) => {
            //     (skills.push(e.target.value));
            // })
            // $(`#range_skill${ i } `).on("change", (e) => {
            //     console.log(skills.push(e.target.value));
            // })
            // console.log("def")
        } else {
            // console.log("abc")
        }
    }
    addHobby = () => {
        let j = $(".hobbies_section input[placeholder='Camping']").length + 1;
        if (j < 7) {
            $(".hobbies_section").append(`<div class="mt-3 hobby" ><label htmlFor="hobby${j}" class="text-muted"> Hobby </label>
                <label id="removeHobby${j}" class="text-muted float-right mr-5"> <i class="fa fa-times"></i> remove </label>
                <input type="text" id="hobby${j}" class="form-control font-weight-bold text-muted my-2" placeholder="Camping" required /></div > `);
            $(`#removeHobby${j} `).on("click", (e) => {
                ($(e.target.parentElement).remove());
            })
        } else {
            // console.log("abc");
        }
    };
    addDegree = () => {
        let k = $(".degree").length + 1;
        if (k < 5) {

            $(".degree_section").append(`<div class="my-3 degree" >
            <div class="d-flex my-4">
                <label htmlFor="degree" class="text-muted mt-2 mx-2"> Degree </label>
                <input type="text" class="form-control col-4" id="degree" placeholder="degree" />

                <label htmlFor="institute1" class="text-muted mt-2 mx-2"> Institute </label>
                <input type="text" class="form-control col-4" id="institute1" placeholder="Institute Name" />
                <label class="text-muted float-right ml-2" id="removeDegree${k}"> <i class="fa fa-times"></i> remove </label>
                </div>
                <div class="d-flex my-4">
                <label htmlFor="date_degree" class="text-muted mt-2 mx-2"> Year Of Admission </label>
                <input type="number" class="form-control col-3" id="date_degree" placeholder="Year Of Admission" />

                <label htmlFor="date_degree" class="text-muted mt-2 mx-2"> Year Of Completion </label>
                <input type="number" class="form-control col-3" id="date_degree" placeholder="Year Of Completion" />
            </div> 
            </div > `);
            $(`#removeDegree${k} `).on("click", (e) => {
                ($(e.target.parentElement.parentElement).remove());
            })
        }
    }
    addExperience = () => {
        let l = $(".experience").length + 1;
        if (l < 7) {
            $(".experience_section").append(`<div class="experience my-3">
        <label htmlFor="hobby${l}" class="text-muted"> Experience </label>
        <label id="removeExperience${l}" class="text-muted float-right mr-5"> <i class="fa fa-times"></i> remove </label>
        <div class="d-flex my-4">
            <label htmlFor="experience" class="text-muted mt-2 mx-2"> Experience </label>
            <input type="text" class="form-control col-4" id="experience" placeholder="Experience As" />

            <label htmlFor="institute1" class="text-muted mt-2 mx-2"> Duration </label>
            <input type="text" class="form-control col-4" id="institute1" placeholder="Experience Duration" />
        </div>
        <div class="d-flex my-4">
            <label htmlFor="date_degree" class="text-muted mt-2 mx-2"> Position </label>
            <input type="text" class="form-control col-3" id="date_degree" placeholder="Position" />

            <label htmlFor="date_degree" class="text-muted mt-2 mx-2"> Location </label>
            <input type="text" class="form-control col-3" id="date_degree" placeholder="Location" />
        </div>
    </div>`);
            $(`#removeExperience${l} `).on("click", (e) => {
                ($(e.target.parentElement).remove());
            })
        }
    }
    addLanguages = (e) => {
        let language = e.target.value;
        if ($(".language").val() !== language) {
            $(".selected_languages").append(`<span class="p-2 mx-1 language" style="background-color: #c5cdcd;">
            <span> ${language} </span>
            <button class="btn removelanguage" type="button" style="width: 10px;padding-top: 0px;font-weight: bolder;">×</button>
            </span>`);
            $(".removelanguage").on("click", e => {
                e.target.parentElement.remove();
            });
        }
    }
    prevention = (e) => {
        e.key === "e" && e.preventDefault();
        e.key === 'E' && e.preventDefault();
        e.key === '.' && e.preventDefault();
        e.key === '-' && e.preventDefault();
        e.key === '+' && e.preventDefault();
        e.key === ' ' && e.preventDefault();
        // (e.target.value.length < 12)
    }
    cancelChanges = () => {
        $(".addInfo").addClass("d-none");
        $(".addInfo").removeClass("d-block");
        $("#main").css("display", "block");
        $(".btn-info").show();
    }
    showEditForm = () => {
        $("#main").css("display", "none");
        $(".addInfo").removeClass("d-none");
        $(".addInfo").addClass("d-block");
        // $("label .text-muted").addClass("font-weight-bold")
        $(".btn-info").hide();
    }
    render() {
        $("body").css("background-color", "#0e0e0e");
        let info = this.state;
        // info.skills.map((item, ind) => {
        // console.log(info.degrees[0],
        //  info.degrees.degree.skill_level
        //  )
        // })
        return (
            <React.Fragment>
                <div className="container bg-white my-5">
                    {/* <div aria-live="polite" aria-atomic="true" style={{ position: "relative", minHeight: "200px" }}>
                        <div className="toast" style={{ position: "absolute", top: 0, right: 0 }}>
                            <div className="toast-header">
                                <img className="rounded mr-2" alt="..." />
                                <strong className="mr-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                        </div>
                    </div> */}
                    <div id="main" className="">
                        <div className="row" style={{ backgroundColor: "#73cee8" }}>
                            <div className="col-4">
                                <img src={logo} alt="" className="img-fluid" style={{ height: "320px", width: "350px" }} />
                            </div>
                            <div className="col-8 mt-5">
                                <div className="mb-5 mt-5">
                                    <h2 className="text-white mt-1 pt-3" id="Full_name" style={{ fontSize: "5em" }}>{info.full_name}</h2>
                                    <h3 className="text-white" id="Profession" style={{ fontSize: "3em" }}>{info.profession}</h3    >
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <ul className="list-group">
                                    <li className="list-group-item bg-dark text-white">
                                        <h2>Contact</h2>
                                    </li>
                                    <li className="list-group-item bg-dark text-white">
                                        <div className="d-flex">
                                            <i className="fa fa-map-marker mx-2 mt-1"></i>
                                            <h6 id="Address">
                                                {info.contact.address}
                                            </h6>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-dark text-white">
                                        <div className="d-flex">
                                            <i className="fa fa-phone mx-2 mt-1"></i>
                                            <h6 id="Phone_num"> {info.contact.phone_num} </h6>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-dark text-white">
                                        <div className="d-flex">
                                            <i className="fa fa-envelope-o mx-2 mt-1"></i>
                                            <h6 id="Email">
                                                {info.contact.email}
                                            </h6>
                                        </div>
                                    </li>
                                    <div id="skills">
                                        <li className="list-group-item bg-dark text-white">
                                            <h2> Personal Skills </h2>
                                        </li>
                                        {
                                            info.skills.map((item, ind) => {
                                                return (
                                                    <li className="list-group-item bg-dark text-white pt-3" key={ind}>
                                                        <div className="d-flex">
                                                            <i className="fa fa-html5 mx-2 mt-1"></i>
                                                            <h6> {item.skill_name} </h6>
                                                            {/* <h6> {info.skills[0].skill.skill_name} </h6> */}
                                                        </div>
                                                        <div className="progress mt-2">
                                                            <div className="progress-bar" role="progressbar" style={{ width: item.skill_level }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{item.skill_level}</div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                        {/* <li className="list-group-item bg-dark text-white">
                                            <div className="d-flex">
                                                <i className="fa fa-css3 mx-2 mt-1"></i>
                                                <h6> CSS 3</h6>
                                            </div>
                                            <div className="progress mt-2">
                                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item bg-dark text-white">
                                            <div className="d-flex">
                                                <span style={{ backgroundColor: "#343a40", padding: "0px 5px 0px 5px", fontWeight: "500", fontSize: "1em", border: "1px solid white", borderRadius: "5px" }}> B </span>
                                                <h6 className="ml-1"> Bootstrap 4</h6>
                                            </div>
                                            <div className="progress mt-2">
                                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item bg-dark text-white">
                                            <div className="d-flex">
                                                <i className="fab fa-js-square fa-lg mx-2 mt-1"></i>
                                                <h6 className="ml-1"> Javascript </h6>
                                            </div>
                                            <div className="progress mt-2">
                                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item bg-dark text-white">
                                            <div className="d-flex">
                                                <i className="fa fa-code mx-2 mt-1"></i>
                                                <h6 className="ml-1"> JQuery </h6>
                                            </div>
                                            <div className="progress mt-2">
                                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                            </div>
                                        </li>
                                     */}
                                    </div>

                                    <div id="hobbies">
                                        <li className="list-group-item bg-dark text-white pt-3">
                                            <h2> Hobbies </h2>
                                        </li>
                                        <li className="list-group-item bg-dark text-white pt-3">
                                            <div className="d-flex">
                                                <i className="fa fa-gamepad ml-4 mt-1 fa-2x"></i>
                                                <i className="fa fa-futbol ml-4 mt-1 fa-2x"></i>
                                                <i className="fas fa-umbrella-beach ml-4 mt-1 fa-2x"></i>
                                                <i className="fas fa-mountain ml-4 mt-1 fa-2x"></i>
                                                <i className="fas fa-hiking ml-4 mt-1 fa-2x"></i>
                                            </div>
                                        </li>
                                    </div>

                                    <div id="Languages">
                                        <li className="list-group-item bg-dark text-white pt-3">
                                            <h2> Languages </h2>
                                        </li>
                                        {info.languages.map((lang, ind) => {
                                            return (
                                                <li className="list-group-item bg-dark text-white" key={ind}>
                                                    <h6> {lang} </h6>
                                                </li>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </div>
                            <div className="col-8">
                                <div className="bg-white">
                                    <ul className="list-group abc mt-3 py-1">
                                        <li className="list-group-item list-group-item-action my-5">
                                            <div className="d-flex w-100 justify-content-between mb-4">
                                                <h5 className="mb-1"> Goal and Objectives </h5>
                                            </div>
                                            <p className="mb-1" id="goal_obj">
                                                {info.goal}
                                            </p>
                                        </li>
                                        <li className="list-group-item list-group-item-action my-5">
                                            <div className="d-flex w-100 justify-content-between mb-4">
                                                <h5 className="mb-1"> Education </h5>
                                            </div>
                                            {info.degrees.map((deg, ind) => {
                                                return (
                                                    <div id="certification" key={ind}>
                                                        <span id="date_degree"> {deg.Y_O_A}-{deg.Y_O_C} </span>
                                                        <span className="mb-1"> | {deg.degree} </span>
                                                        <p className="mb-1 font-weight-bolder d-block">  {deg.institute} </p>
                                                    </div>
                                                )
                                            })}

                                            {/* <div id="certification">
                                                <span id="date_degree"> 2015-2016 </span>
                                                <span className="mb-1"> | Intermediate in Pre-Engineering </span>
                                                <p className="mb-1 font-weight-bolder d-block"> Government Muslim Science College, Hyd </p>
                                            </div> */}

                                        </li>
                                        <li className="list-group-item list-group-item-action my-5">
                                            <div className="d-flex w-100 justify-content-between mb-4">
                                                <h5 className="mb-1"> Employment </h5>
                                            </div>
                                            {info.experiences.map((exp, ind) => {
                                                return (
                                                    <React.Fragment key={ind}>
                                                        <p className="mb-1"> {exp.duration}  {exp.experience} {exp.position} </p>
                                                        <p className="mb-1 font-weight-bolder"> {exp.location} </p>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="addInfo d-none">
                        <form className="p-3" method="post" encType="multipart/form-data" name="addinfo">
                            <div className="row">
                                <div className="col-8 offset-2 p-4 bg-secondary text-white">
                                    <h2> Your Info </h2>
                                </div>
                                <div className="col-8 offset-2 mt-3 p-2">
                                    <label htmlFor="full_name" className="text-muted font-weight-bold"> Full Name </label>
                                    <input type="text" id="full_name" className="form-control font-weight-bold text-muted" required placeholder="John Wick" />
                                </div>
                                <div className="col-8 offset-2 p-2">
                                    <label htmlFor="profession" className="text-muted font-weight-bold"> Professsion </label>
                                    <input type="text" id="profession" className="form-control font-weight-bold text-muted" required placeholder="Archietech" />
                                </div>
                                <div className="col-8 offset-2 p-2">
                                    <label htmlFor="contact" className="text-muted font-weight-bold"> Contact </label>
                                    <div className="row">
                                        <label htmlFor="Email" className="mx-2 mt-2 text-muted font-weight-bold"> Email </label>
                                        <input type="email" id="email" className="form-control d-flex  col-4 font-weight-bold text-muted" required placeholder="abc@example.com" />
                                        <label htmlFor="phone_num" className="mx-2 mt-2 text-muted font-weight-bold"> Phone  </label>
                                        <input type="number" id="phone_num" className="form-control d-flex  col-4 font-weight-bold text-muted" required placeholder="+** ********" onKeyDown={(e) => this.prevention(e)} />
                                    </div>
                                </div>
                                <div className="col-8 offset-2 p-2">
                                    <label htmlFor="address" className="text-muted font-weight-bold"> Permenant Address </label>
                                    <textarea className="form-control" id="address" rows="3" placeholder="Write here" required style={{ resize: "none" }}></textarea>
                                </div>

                                <div className="col-8 offset-2 p-2 my-2">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">Choose Your Profile Image</label>
                                        <input type="file" className="form-control-file" name="profile_img" id="profile_img" onChange={(e) => this.handleFileInput(e)} />
                                    </div>
                                </div>

                                <div className="col-8 offset-2 p-2">
                                    <button type="button" id="2" className='btn btn-white text-muted float-right w-25' onClick={this.addSkill}>
                                        <i className="fa fa-plus"></i> Add Skill
                                    </button>
                                    <label htmlFor="skill1" className="text-muted font-weight-bold"> Personal Skills </label>
                                    <div className="skills_section mt-3">
                                        <div className="skill">
                                            <label htmlFor="skill1" className="text-muted font-weight-bold"> Skill </label>
                                            <input type="text" id="skill1" className="form-control font-weight-bold text-muted my-2" placeholder="Graphics Designer" required />
                                            <label htmlFor="range_skill1" className="text-muted font-weight-bold"> Skill Level </label>
                                            <input type="range" className="form-control-range" id="range_skill1" min={0} max={4} step={1} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-8 offset-2 p-2">
                                    <button type="button" id="2" className='btn btn-white text-muted float-right w-25' onClick={this.addHobby}>
                                        <i className="fa fa-plus"></i> Add Hobby
                                    </button>
                                    <label htmlFor="" className="text-muted font-weight-bold"> Hobbies </label>
                                    <div className="hobbies_section mt-3">
                                        <div className="hobby">
                                            <label htmlFor="" className="text-muted font-weight-bold"> Hobby </label>
                                            <input type="text" id="" className="form-control font-weight-bold text-muted my-2" placeholder="Camping" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8 offset-2 p-2">
                                    <label htmlFor="" className="text-muted font-weight-bold"> Languages </label>
                                    <select className="form-control form-control-sm" id="languages" data-placeholder="Choose a Language..." onChange={(e) => this.addLanguages(e)}>
                                        <option value="All Languages">All Languages</option>
                                        <option value="Afrikaans">Afrikaans</option>
                                        <option value="Albanian">Albanian</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Armenian">Armenian</option>
                                        <option value="Basque">Basque</option>
                                        <option value="Bengali">Bengali</option>
                                        <option value="Bulgarian">Bulgarian</option>
                                        <option value="Catalan">Catalan</option>
                                        <option value="Cambodian">Cambodian</option>
                                        <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                                        <option value="Croatian">Croatian</option>
                                        <option value="Czech">Czech</option>
                                        <option value="Danish">Danish</option>
                                        <option value="Dutch">Dutch</option>
                                        <option value="English">English</option>
                                        <option value="Estonian">Estonian</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finnish">Finnish</option>
                                        <option value="French">French</option>
                                        <option value="Georgian">Georgian</option>
                                        <option value="German">German</option>
                                        <option value="Greek">Greek</option>
                                        <option value="Gujarati">Gujarati</option>
                                        <option value="Hebrew">Hebrew</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Hungarian">Hungarian</option>
                                        <option value="Icelandic">Icelandic</option>
                                        <option value="Indonesian">Indonesian</option>
                                        <option value="Irish">Irish</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Japanese">Japanese</option>
                                        <option value="Javanese">Javanese</option>
                                        <option value="Korean">Korean</option>
                                        <option value="Latin">Latin</option>
                                        <option value="Latvian">Latvian</option>
                                        <option value="Lithuanian">Lithuanian</option>
                                        <option value="Macedonian">Macedonian</option>
                                        <option value="Malay">Malay</option>
                                        <option value="Malayalam">Malayalam</option>
                                        <option value="Maltese">Maltese</option>
                                        <option value="Maori">Maori</option>
                                        <option value="Marathi">Marathi</option>
                                        <option value="Mongolian">Mongolian</option>
                                        <option value="Nepali">Nepali</option>
                                        <option value="Norwegian">Norwegian</option>
                                        <option value="Persian">Persian</option>
                                        <option value="Polish">Polish</option>
                                        <option value="Portuguese">Portuguese</option>
                                        <option value="Punjabi">Punjabi</option>
                                        <option value="Quechua">Quechua</option>
                                        <option value="Romanian">Romanian</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Samoan">Samoan</option>
                                        <option value="Serbian">Serbian</option>
                                        <option value="Slovak">Slovak</option>
                                        <option value="Slovenian">Slovenian</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Swahili">Swahili</option>
                                        <option value="Swedish ">Swedish </option>
                                        <option value="Tamil">Tamil</option>
                                        <option value="Tatar">Tatar</option>
                                        <option value="Telugu">Telugu</option>
                                        <option value="Thai">Thai</option>
                                        <option value="Tibetan">Tibetan</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Turkish">Turkish</option>
                                        <option value="Ukrainian">Ukrainian</option>
                                        <option value="Urdu">Urdu</option>
                                        <option value="Uzbek">Uzbek</option>
                                        <option value="Vietnamese">Vietnamese</option>
                                        <option value="Welsh">Welsh</option>
                                        <option value="Xhosa">Xhosa</option>
                                    </select>
                                </div>
                                <div className="col-8 offset-2 p-2 selected_languages">
                                </div>

                                <div className="col-8 offset-2 p-2">
                                    <label htmlFor="goal" className="text-muted font-weight-bold"> Goal And Objectives </label>
                                    <textarea className="form-control" id="goal" rows="3" placeholder="Write here" required style={{ resize: "none" }}></textarea>
                                </div>

                                <div className="col-8 offset-2 p-2">
                                    <label htmlFor="experience" className="text-muted font-weight-bold"> Employment Experience </label>
                                    <button type="button" id="" className='btn btn-white text-muted float-right w-25' onClick={this.addExperience}>
                                        <i className="fa fa-plus"></i> Add Experience
                                    </button>

                                    <div className="experience_section">
                                        <div className="experience">
                                            <div className="d-flex my-4">
                                                <label htmlFor="experience" className="text-muted mt-2 mx-2 font-weight-bold"> Experience </label>
                                                <input type="text" className="form-control col-4" id="experience" placeholder="Experience As" />

                                                <label htmlFor="institute1" className="text-muted mt-2 mx-2 font-weight-bold"> Duration </label>
                                                <input type="text" className="form-control col-4" id="institute1" placeholder="Experience Duration" />
                                            </div>
                                            <div className="d-flex my-4">
                                                <label htmlFor="date_degree" className="text-muted mt-2 mx-2 font-weight-bold"> Position </label>
                                                <input type="text" className="form-control col-3" id="date_degree" placeholder="Position" />

                                                <label htmlFor="date_degree" className="text-muted mt-2 mx-2 font-weight-bold"> Location </label>
                                                <input type="text" className="form-control col-3" id="date_degree" placeholder="Location" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-8 offset-2 p-2">
                                    <label htmlFor="" className="text-muted font-weight-bold"> Certification/Degree </label>
                                    <button type="button" id="2" className='btn btn-white text-muted float-right w-25' onClick={this.addDegree}>
                                        <i className="fa fa-plus"></i> Add Degree
                                    </button>
                                    <div className="degree_section">
                                        <div className="degree">
                                            <div className="d-flex my-4">
                                                <label htmlFor="degree" className="font-weight-bold text-muted mt-2 mx-2"> Degree </label>
                                                <input type="text" className="form-control col-4" id="degree" placeholder="degree" />

                                                <label htmlFor="institute1" className="text-muted mt-2 mx-2 font-weight-bold"> Institute </label>
                                                <input type="text" className="form-control col-4" id="institute1" placeholder="Institute Name" />
                                            </div>
                                            <div className="d-flex my-4">
                                                <label htmlFor="date_degree" className="text-muted mt-2 mx-2 font-weight-bold"> Year Of Admission </label>
                                                <input type="number" className="form-control col-3" id="date_degree" placeholder="Year Of Admission" onKeyDown={(e) => this.prevention(e)} />

                                                <label htmlFor="date_degree" className="text-muted mt-2 mx-2 font-weight-bold"> Year Of Completion </label>
                                                <input type="number" className="form-control col-3" id="date_degree" placeholder="Year Of Completion" onKeyDown={(e) => this.prevention(e)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-8 offset-2 p-3">
                                    <center>
                                        <input type="button" className="btn btn-success w-25 btn-md font-weight-bold mx-2" id="" value="Submit" onClick={this.addInfo} data-toggle="modal" data-target="#alertModal" />
                                        <input type="button" className="btn btn-danger w-25 btn-md font-weight-bold mx-2" id="Sunmit" value="Cancel" onClick={this.cancelChanges} />
                                    </center>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <center>
                    <button className="btn col-3 btn-info font-weight-bold mb-5" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" onClick={this.showEditForm}>
                        Edit
                    </button>
                </center>

                <div className="modal fade" id="alertModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

