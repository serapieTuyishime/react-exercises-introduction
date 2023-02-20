import Button from "./ui/Button";
import { useState } from "react";
import Navigation from "./ui/Navigation";

export default function Exe4() {
    const [clicks, setClicks] = useState(0);
    return (
        <>
            <Navigation />

            <div className="gap-3 main">
                <div>Button has been clicked: {clicks} times</div>
                <Button clicks={clicks} setClicks={setClicks} />
            </div>
        </>
    );
}
