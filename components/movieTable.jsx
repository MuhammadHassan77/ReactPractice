import React, { Component } from 'react';
// import { $ } from 'jquery';
let movies_db = [{
    "id": "1",
    "title": "Teminator",
    "genre": "action",
    "rent": "1.3"
},
{
    id: "2",
    title: "Godzilla",
    genre: "Adventure",
    rent: "2.4"
}, {
    id: "3",
    title: "Avatar",
    genre: "Sci-fiction",
    rent: "4.7"
}, {
    id: "4",
    title: "Croods",
    genre: "animated",
    rent: "5.1"
}
]
class Table extends Component {
    state = {
        movies: movies_db
    }
    deleteMovies = (movie) => {
        const movies = this.state.movies.filter(m => m !== movie)
        this.setState({
            movies: movies
        })
    }
    render() {
        // this.state.movies.map((v, i) => {
        //     console.log(v["id"])
        //     // return <td>{v}</td>
        // })
        return (
            <div className="container my-2">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">
                        Navbar
                        <span className="badge badge-primary m-2">{this.state.movies.length}</span>
                    </span>
                </nav>
                {
                    this.state.movies.length > 0 ? <p>Showing {this.state.movies.length} movies in the database</p> : <p>There no movies in the database</p>
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Rent</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map((movie, i) => {
                                return <tr key={i} id={i}>
                                    <td id={i}> {movie["title"]} </td>
                                    <td id={i}> {movie["genre"]} </td>
                                    <td id={i}> {movie["rent"]} </td>
                                    <td id={i}> <button className="btn btn-danger btn-sm" onClick={() => this.deleteMovies(movie)}>
                                        Delete
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;