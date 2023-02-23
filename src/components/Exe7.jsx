import { useState } from "react";
export default function Exe7() {
    const [names, setNames] = useState({
        firstName: "",
        lastName: "",
    });
    function handleNameChange(event) {
        const { name, value } = event.target;
        setNames({ ...names, [name]: value });
    }
    return (
        <div className="main">
            <form className="grid gap-4">
                <input
                    className="form-input"
                    value={names.firstName}
                    onChange={(event) => handleNameChange(event)}
                    placeholder="First name"
                    name="firstName"
                />
                <input
                    className="form-input"
                    placeholder="Last name"
                    name="lastName"
                    value={names.lastName}
                    onChange={(event) => handleNameChange(event)}
                />
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        alert(`Hello ${names.firstName} ${names.lastName}`);
                    }}
                    className="px-4 py-2 uppercase bg-red-600"
                >
                    Greet me
                </button>
            </form>
        </div>
    );
}
