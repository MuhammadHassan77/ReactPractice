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
    search = () => {
        var searchInput = document.getElementById("searchInput");
        var searchTable = document.getElementById("tb");
        // console.log(searchTable.search(/searchInput/g));


        var filter, tr, td, i;
        // input = document.getElementById("myInput");
        filter = searchInput.value.toUpperCase();
        // table = document.getElementById("myTable");
        tr = searchTable.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    tr[i].style.backgroundColor = "#a1cef0"
                    tr[i].style.color = "black"
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
        searchInput.value = "";
    }
    render() {
        return (
            <div className="container text-center" style={{ width: "100%" }}>
                <h1>Azan Time</h1>
                <div className="mx-2 my-3 py-1">
                    <input type="text" className="form-input py-2 col-lg-10" maxLength="30" placeholder="Search Here..." id="searchInput" />
                    <button className="btn btn-primary col-lg-1" onClick={this.search}>Search</button>
                </div>
                <div className="row my-2">
                    {/* <div className="col-lg-6 py-2" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
                        Gregorain Month # {this.state.info["date"]["gregorian"]["month"]["number"] + ' ' + this.state.info["date"]["gregorian"]["month"]["en"]}</div>*/}
                    <div className="col-lg-10  offset-lg-1 py-2" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
                        Islamic Month # {this.state.hijriMonth["number"] + ' ' + this.state.hijriMonth["en"] + ' ( ' + this.state.hijriMonth["ar"] + ' ) '}</div>
                </div>
                <table className="table table-striped table-dark" id="tb">
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

// import React from 'react';
// export default class Azandata extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             cal: [],
//             info: [],
//             timings: [],
//             date: [],
//             meta: [],
//             gregorian: [],
//             hijri: []
//         }
//     }

//     componentDidMount() {
//         fetch('http://api.aladhan.com/v1/hijriCalendarByCity?city=Hyderabad&country=Pakistan&method=1&month=3')
//             .then(response => response.json())
//             .then(data => {
//                 // console.log(data["data"]["date"])
//                 // console.log(data["data"][0]["date"]["gregorian"]["month"]["number"])
//                 // console.log(data["data"][0]["timings"]["Fajr"])
//                 this.setState({
//                     cal: [data],
//                     info: data["data"],
//                     timings: data["data"][0]["timings"],
//                     date: data["data"][0]["date"],
//                     gregorian: data["data"][0]["date"]["gregorian"]["month"],
//                     hijri: data["data"][0]["date"]["hijri"]["month"],
//                     meta: data["data"][0]["meta"],
//                 })
//                 // console.log(this.state.date["gregorian"]["month"]["en"])
//                 // console.log(this.state.gregorian)
//             }
//             )
//             .catch(err => console.log(err))
//     }
//     render() {
//         return (
//             <div style={{ width: "100%" }}>
//                 <h1>Azan Time</h1>
//                 <div className="row">
//                     <div className="col-lg-5 offset-lg-1" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
//                         Gregorain Month # {this.state.gregorian["number"] + ' ' + this.state.gregorian["en"]}</div>
//                     <div className="col-lg-5" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
//                         Islamic Month # {this.state.hijri["number"] + ' ' + this.state.hijri["en"]}</div>
//                 </div>
//                 {/* <input type="text" className="form-group py-1" maxLength="30"  placeholder="enter todo" />
//                 <button className="btn btn-primary  ml-2" >Add</button> */}
//                 <table className="table table-striped table-dark">
//                     <thead>
//                         <tr>
//                             <th scope="col">Fajr</th>
//                             <th scope="col">Zohr</th>
//                             <th scope="col">Asr</th>
//                             <th scope="col">Maghrib</th>
//                             <th scope="col">Isha</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.info.map((v, i) => {
//                                 return <tr key={i}>
//                                     <td>
//                                         {v["timings"]["Fajr"]}
//                                     </td>
//                                     <td>
//                                         {v["timings"]["Dhuhr"]}
//                                     </td>
//                                     <td>
//                                         {v["timings"]["Asr"]}
//                                     </td>
//                                     <td>
//                                         {v["timings"]["Maghrib"]}
//                                     </td>
//                                     <td>
//                                         {v["timings"]["Isha"]}
//                                     </td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
