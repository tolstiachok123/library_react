import React, { useState } from 'react'
import axios from 'axios';

export default function Login () {
    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitCheckin = event => {
        event.preventDefault();
        axios.post("http://localhost:8088/api/auth/login", {
            email: register.email,
            password: register.password,
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            } else {
                alert("User with such email does not exist")
            }
        }).catch(() => {
            alert("An error occurred on the server")
        })
    }

    return (
        <div className="form">
            <h2>Login user:</h2>
            <form onSubmit={submitCheckin}>
                <p>Email: <input
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={changeInputRegister}
                /></p>
                <p>Password: <input
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputRegister}
                /></p>
                <input type="submit"/>
            </form>
        </div>
    )
}