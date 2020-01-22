import React from 'react';
import './signup.css';
import axios from 'axios';
// const { pool, Client } = require('pg');


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            users: []
        }
    }
    // hello = () => {

    //     console.log(pool);
    //     const connectionString = 'postgressql://postgres:rahul1095@localhost:5432/postgres';
    //     const client = new Client({
    //         connectionString: connectionString
    //     })
    //     client.connect()
    //     client.query('SELECT * FROM details', (err, res) => {
    //         console.log(err, res);

    //         client.end();
    //     });
    // }
    check = (e) => {
        console.log(this.state.email, this.state.password)
        axios.post('http://localhost:5223/login', { email: this.state.email, password: this.state.password })
            .then(res => {
                const users = res.data.results.rows;
                console.log(users);
                if (res.data.success === true) {
                    this.props.history.push('/');
                    localStorage.setItem('user', JSON.stringify(users));
                }
                else {
                    alert("invalid credentials");
                }

            })


    }
    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="signpage">
                <div className="container">
                    <h2>Login</h2>
                    <div id="login">
                        <div className="col-25">
                            <label htmlFor="fname">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} /><br /></div>
                        <div className="col-25">
                            <label htmlFor="fname">Password</label>
                        </div>
                        <div className="col-75">
                            <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} /><br />
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Are you a Student/Teacher?</label>
                        </div>
                        <div className="col-75">
                            <select id="role" name="role">
                                <option value="Teacher">Teacher</option>
                                <option value="Student">Student</option>

                            </select>
                        </div>
                        <button id="send" onClick={e => { this.check(e) }}>Login</button>
                        <p>New user?</p>
                        <button ><a className="line" href="/signup">signup</a></button>
                    </div>

                </div>
            </div>
        );
    }
}
export default Login;