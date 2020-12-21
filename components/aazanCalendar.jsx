import React from 'react';
export default class Azandata extends React.Component {
    constructor() {
        super()
        this.state = {
            info: [],
            // gregorianMonth: [],
            hijriMonth: [],
            month: this.props
        }
    }
    componentDidMount() {
        // console.log(this.props)
        fetch('http://api.aladhan.com/v1/hijriCalendarByCity?city=Hyderabad&country=Pakistan&method=1&month=' + this.props["mon"] + '&year=1442&annaul=1&method=1&school=1')
            .then(response => response.json())
            .then(data => {
                // console.log(data)

                this.setState({
                    info: data["data"],
                    // gregorianMonth: data["data"][0]["date"]["gregorian"]["month"],
                    hijriMonth: data["data"][0]["date"]["hijri"]["month"],
                })
            }
            )
            .catch(err => console.log(err))

    }
    // search = () => {
    //     var searchInput = document.getElementById("searchInput" + this.props["mon"]);
    //     var searchTable = document.getElementById("tb" + this.props["mon"]);
    //     // console.log(searchTable.search(/searchInput/g));


    //     var filter, tr, td, i;
    //     // input = document.getElementById("myInput");
    //     filter = searchInput.value.toUpperCase();
    //     // table = document.getElementById("myTable");
    //     tr = searchTable.getElementsByTagName("tr");

    //     // Loop through all table rows, and hide those who don't match the search query
    //     for (i = 0; i < tr.length; i++) {
    //         td = tr[i].getElementsByTagName("td")[0];
    //         if (td) {
    //             if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //                 tr[i].style.display = "";
    //                 tr[i].style.backgroundColor = "#a1cef0"
    //                 tr[i].style.color = "black"
    //             } else {
    //                 tr[i].style.display = "none";
    //             }
    //         }
    //     }
    //     searchInput.value = "";
    // }
    render() {
        return (
            <div className="container text-center" style={{ width: "100%" }}>
                <h1 className="text-primary">Azan Time</h1>
                {/* <div className="mx-2 my-3 py-1">
                    <input type="text" className="form-input py-2 col-lg-10" maxLength="30" placeholder="Search Here..." id={'searchInput' + this.props["mon"]} />
                    <button className="btn btn-primary col-lg-1" onClick={this.search}>Search</button>
                </div> */}
                <div className="row my-2">
                    {/* <div className="col-lg-6 py-2" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
                        Gregorain Month # {this.state.info["date"]["gregorian"]["month"]["number"] + ' ' + this.state.info["date"]["gregorian"]["month"]["en"]}</div>*/}
                    <div className="col-lg-10  offset-lg-1 py-2" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
                        Islamic Month # {this.state.hijriMonth["number"] + ' ' + this.state.hijriMonth["en"] + ' ( ' + this.state.hijriMonth["ar"] + ' ) '}</div>
                </div>
                <table className="table table-striped table-dark" id={'td' + this.props["mon"]}>
                    <thead>
                        <tr>
                            <th scope="col">Gregorain Date</th>
                            <th scope="col">Fajr</th>
                            <th scope="col">Zohr</th>
                            <th scope="col">Asr</th>
                            <th scope="col">Maghrib</th>
                            <th scope="col">Isha</th>
                            <th scope="col">Islamic Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.info.map((v, i) => {
                                return <tr key={i}>
                                    <td style={{ backgroundColor: "#51cfcf", color: "black" }}>
                                        {v["date"]["readable"]}
                                    </td>
                                    <td>
                                        {v["timings"]["Fajr"]}
                                    </td>
                                    <td>
                                        {v["timings"]["Dhuhr"]}
                                    </td>
                                    <td>
                                        {v["timings"]["Asr"]}
                                    </td>
                                    <td>
                                        {v["timings"]["Maghrib"]}
                                    </td>
                                    <td>
                                        {v["timings"]["Isha"]}
                                    </td>
                                    <td style={{ backgroundColor: "#51cfcf", color: "black" }}>
                                        {v["date"]["hijri"]["date"]}
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}