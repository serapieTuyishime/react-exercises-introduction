import ReactCardFlip from "react-card-flip";
import { useState } from "react";
export default function Card({
    image = "./pokemons/Bulbasaur.png",
    name = "[default name]",
    type = ["one", "two"],
    otherSpecs,
}) {
    const [isFlipped, setIsflipped] = useState(false);
    function handleClick() {
        setIsflipped(!isFlipped);
    }
    return (
        <div className="grid p-2 h-64 w-44 bg-white rounded-md ">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div
                    className="grid gap-2 h-full w-full"
                    onClick={() => handleClick()}
                >
                    <img src={image} alt={name} />
                    <label className="font-bold">{name}</label>
                    <label className="">
                        {type.map((el, index) => {
                            return (
                                <span className="mr-1" key={index}>
                                    {el}
                                </span>
                            );
                        })}
                    </label>
                </div>
                <div
                    className="grid place-content-center gap-2 h-full w-full bg-gray-200"
                    onClick={() => handleClick()}
                >
                    <span className="flex gap-2">
                        <span>HP:</span>
                        <span>{otherSpecs.hp}</span>
                    </span>
                    <span className="flex gap-2">
                        <span>attack:</span>
                        <span>{otherSpecs.attack}</span>
                    </span>
                    <span className="flex gap-2">
                        <span>special_attack:</span>
                        <span>{otherSpecs.special_attack}</span>
                    </span>
                    <span className="flex gap-2">
                        <span>special_defense:</span>
                        <span>{otherSpecs.special_defense}</span>
                    </span>
                </div>
            </ReactCardFlip>
        </div>
    );
}
