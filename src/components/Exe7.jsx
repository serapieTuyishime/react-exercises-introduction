// import { useState } from "react";
import Navigation from "./ui/Navigation";

export default function Exe7() {
    // const [firstName, setFirstName] = useState("");
    // const [lastname, setLastName] = useState("");
    return (
        <>
            <Navigation />

            {/* <div className="main">
                <form className="grid gap-4">
                    <input
                        className="form-input"
                        value={firstName}
                        onChange={(event) => {
                            setFirstName(event.currentTarget.value);
                        }}
                        placeholder="First name"
                    />
                    <input
                        className="form-input"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(event) => {
                            setLastName(event.currentTarget.value);
                        }}
                    />
                    <button
                        onClick={() => alert(`Hello ${firstName} ${lastname}`)}
                        className="px-4 py-2 uppercase bg-red-600"
                    >
                        Greet me
                    </button>
                </form>
            </div> */}
        </>
    );
}
