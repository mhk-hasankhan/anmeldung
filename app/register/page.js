// app/register/page.js
"use client";
import { set } from "mongoose";
import { useState } from "react";
import { FormEvent } from "react";
export default function Register() {
    const [name, setName] = useState("Ryan");
    const [email, setEmail] = useState("ryan@gmail.com");
    const [password, setPassword] = useState("rrrrrr");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            console.table({ name, email, password });
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    return (
    <main>
        <div className="container">
            <div className="row d-flex justify-content-center align-itemscenter vh-100">
                <div className="col-lg-5 bg-light p-5 shadow">
                    <h2 className="mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-4"
        placeholder="Your name"
        />
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-4"
        placeholder="Your email"
        />
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control mb-4"
        placeholder="Your password"
        />
        <button
        className="btn btn-primary btn-raised"
        disabled={loading || !name || !email || !password}
        >
        {loading ? "Please wait.." : "Submit"}
        </button>
        </form>
        </div>
        </div>
        </div>
    </main>
    );
}