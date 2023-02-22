import Meme from "./ui/Meme";
import { useEffect, useState } from "react";
export default function RenderingJSON() {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        fetch("./memes.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMemes(data);
            })
            .catch((err) => {
                throw err;
            });
    }, []);
    return (
        <div className="main bg-lime-300">
            <div className="flex gap-4">
                {memes.map((el, index) => {
                    return (
                        <Meme
                            title={el.setup}
                            body={el.punchline}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}
