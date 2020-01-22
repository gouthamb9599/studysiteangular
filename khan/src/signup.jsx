import React from 'react';
import './signup.css';
// import { Redirect } from 'react0-router-dom';
// import history from './history';
const axios = require('axios');


// const { pool, Client } = require('pg');

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            role: "",
            password: "",
            cpassword: "",
            redirectToLogin: false,

        }
    }
    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value });
    };

    // hello = (ele) => {

    //     console.log(pool);
    //     const connectionString = 'postgressql://postgres:rahul1095@localhost:5432/postgres';
    //     const client = new Client({
    //         connectionString: connectionString
    //     })
    //     client.connect()
    //     client.query('INSERT INTO details', (err, res) => {
    //         console.log(err, res);

    //         client.end();
    //     });
    // }
    signup = (e) => {
        var roles = document.getElementById("role").value;


        if (this.state.name === "") {
            alert("Enter your name");
        }
        else if (this.state.email === "") {
            alert("Enter your Email ID");
        }
        else if (this.state.password !== this.state.cpassword) {
            alert("passwords does not match");
        }
        else {
            var id = 0;
            if (roles === "1") {
                id = 1;
            }
            else if (roles === "2") {
                id = 2
            }
            console.log(this.state.name);
            axios.post("http://localhost:5223/signup", {
                name: this.state.name,
                email: this.state.email,
                role: id,
                password: this.state.password
            }).then((res) => {
                if (res.data === this.state.name) {
                    this.setState({ ...this.state, name: "bk" });
                    console.log("user registered");
                    console.log(this.props);
                    this.props.history.push('/login');
                    // this.setState({
                    //     redirectToLogin: true
                    // });


                }
            })
        }
    }
    render() {
        // if (this.state.redirectToLogin) {
        //     return <Redirect path={'/login'} />;
        // }

        return (
            <div className="signpage">
                <div className="container">
                    <h2>
                        Signup
                </h2>
                    <div id="signup">
                        <div className="col-25">
                            <label htmlFor="fname">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="name" name="name" placeholder=" Name" onChange={(e) => this.handleChange(e)} /><br />
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} /><br />
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Role</label>
                        </div>
                        <div className="col-75">
                            <select id="role" name="role">
                                <option value="1">Teacher</option>
                                <option value="2" >Student</option>

                            </select>
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Password</label>
                        </div>
                        <div className="col-75">
                            <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} /><br />
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Confirm Password</label>
                        </div>
                        <div className="col-75">
                            <input type="password" id="confirm" name="cpassword" placeholder="Confirm Password" onChange={(e) => this.handleChange(e)} /><br /></div>
                        <button id="send" onClick={e => { this.signup(e) }} >Signup</button>
                        <p>Have an account?</p>
                        <button ><a className="line" href="/login">Login</a></button>
                    </div>
                </div>
            </div>

        );
    }
}
export default Signup;