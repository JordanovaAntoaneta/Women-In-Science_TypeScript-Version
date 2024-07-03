import React from "react";
import { useState } from "react";

export default function SayHello() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [person, setPerson] = useState('');

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
        setPerson(`${firstName} ${lastName}`);
    }

    return (
        <form onSubmit={e => e.preventDefault()} className="hello">
            <div>
                <input
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="inp"
                />
                <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="inp"
                />
                <button className="button" onClick={handleReset}>Submit</button>
            </div>

            <h1>Hi, {person}</h1>

        </form>
    );
}