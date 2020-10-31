import React from 'react';
export default class Azandata extends React.Component {
    constructor() {
        super()
        this.state = {
            cal: [],
            info: [],
            timings: [],
            date: [],
            meta: [],
            gregorian: [],
            hijri: []
        }
    }

    componentDidMount() {
        fetch('http://api.aladhan.com/v1/hijriCalendarByCity?city=Hyderabad&country=Pakistan&method=1&month=3')
            .then(response => response.json())
            .then(data => {
                // console.log(data["data"]["date"])
                // console.log(data["data"][0]["date"]["gregorian"]["month"]["number"])
                // console.log(data["data"][0]["timings"]["Fajr"])
                this.setState({
                    cal: [data],
                    info: data["data"],
                    timings: data["data"][0]["timings"],
                    date: data["data"][0]["date"],
                    gregorian: data["data"][0]["date"]["gregorian"]["month"],
                    hijri: data["data"][0]["date"]["hijri"]["month"],
                    meta: data["data"][0]["meta"],
                })
                // console.log(this.state.date["gregorian"]["month"]["en"])
                // console.log(this.state.gregorian)
            }
            )
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div style={{ width: "100%" }}>
                <h1>Azan Time</h1>
                <div className="row">
                    <div className="col-lg-5 offset-lg-1" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
                        Gregorain Month # {this.state.gregorian["number"] + ' ' + this.state.gregorian["en"]}</div>
                    <div className="col-lg-5" style={{ backgroundColor: "black", fontSize: "1.5em", fontWeight: 700, color: "#32ba32" }}>
                        Islamic Month # {this.state.hijri["number"] + ' ' + this.state.hijri["en"]}</div>
                </div>
                {/* <input type="text" className="form-group py-1" maxLength="30"  placeholder="enter todo" />
                <button className="btn btn-primary  ml-2" >Add</button> */}
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Fajr</th>
                            <th scope="col">Zohr</th>
                            <th scope="col">Asr</th>
                            <th scope="col">Maghrib</th>
                            <th scope="col">Isha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.info.map((v, i) => {
                                return <tr key={i}>
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
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}