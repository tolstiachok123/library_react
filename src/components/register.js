import React, { useState } from 'react'
import axios from 'axios';

export default function Register () {
    const [register, setRegister] = useState(() => {
        return {
            email: "",
            firstName: "",
            lastName: "",
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
        axios.post("http://localhost:8088/api/auth/registration", {
            email: register.email,
            firstName: register.firstName,
            lastName: register.lastName,
            password: register.password,
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            } else {
                alert("There is already a user with this email")
            }
        }).catch(() => {
            alert("An error occurred on the server")
        })
    }

    return (
        <div className="form">
            <h2>Register user:</h2>
            <form onSubmit={submitCheckin}>
                <p>Email: <input
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={changeInputRegister}
                /></p>
                <p>FirstName: <input
                    type="firstName"
                    id="firstName"
                    name="firstName"
                    value={register.firstName}
                    onChange={changeInputRegister}
                /></p>
                <p>LastName: <input
                    type="lastName"
                    id="lastName"
                    name="lastName"
                    value={register.lastName}
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