import ReactCardFlip from "react-card-flip";
import { useState } from "react";
export default function Card({
    image = "./pokemons/Bulbasaur.png",
    name = "[default name]",
    username = "drama",
    address,
}) {
    const [isFlipped, setIsflipped] = useState(false);
    function handleFlip() {
        setIsflipped((isFlipped) => !isFlipped);
    }
    return (
        <div className="grid w-48 h-64 p-2 bg-white rounded-md">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div
                    className="grid w-full h-full gap-2"
                    onMouseEnter={handleFlip}
                    onMouseLeave={handleFlip}
                >
                    <img src={image} alt={name} />
                    <label className="font-bold">{name}</label>
                    <label className="">{username}</label>
                </div>
                <div
                    className="grid w-full h-full gap-2 bg-gray-200 place-content-center"
                    onMouseEnter={handleFlip}
                    onMouseLeave={handleFlip}
                >
                    <span>{address.city}</span>

                    <span>{address.street_name}</span>

                    <span>{address.street_address}</span>

                    <span>{address.zip_code}</span>
                </div>
            </ReactCardFlip>
        </div>
    );
}
