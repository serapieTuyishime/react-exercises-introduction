import Button from "./ui/Button";
import { useState } from "react";
export default function Exe4() {
    const [clicks, setClicks] = useState(0);
    return (
        <div className="main gap-3">
            <div>Button has been clicked: {clicks} times</div>
            <Button clicks={clicks} setClicks={setClicks} />
        </div>
    );
}
