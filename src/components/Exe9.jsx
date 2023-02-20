// import { useEffect, useState } from "react";
import Navigation from "./ui/Navigation";

// import Card from "./ui/Card";

export default function Exe9() {
    // const [allPokemons, setAllPokemons] = useState([]);
    // const [unchangedPokemons, setUnchangedPokemons] = useState([]);
    // useEffect(() => {
    //     fetch("./pokemon.json")
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setAllPokemons(data);
    //             setUnchangedPokemons(data);
    //         })
    //         .catch((err) => {
    //             throw err;
    //         });
    // }, []);
    // function shuffleCards() {
    //     // put indexes in a random order
    //     let shuffled = [];
    //     let count = 0;
    //     while (shuffled.length < unchangedPokemons.length) {
    //         let temp = Math.floor(Math.random() * unchangedPokemons.length);
    //         if (
    //             unchangedPokemons[temp] &&
    //             shuffled.indexOf(unchangedPokemons[temp]) === -1
    //         ) {
    //             shuffled.push(unchangedPokemons[temp]);
    //         }
    //         count++;
    //         if (count === unchangedPokemons.length * 4) break; //Alow it lop 4 more times f it does not get the found index
    //     }
    //     setAllPokemons(shuffled);
    // }
    return (
        <>
            <Navigation />

            {/* <div className="main bg-lime-200">
                <button
                    className="px-4 py-2 mx-auto text-2xl font-bold text-white uppercase bg-red-600 max-w-max"
                    onClick={() => {
                        shuffleCards();
                    }}
                >
                    Shuffle cards
                </button>
                <div className="grid grid-cols-3 gap-3 p-3 mx-auto">
                    {allPokemons.map((el, index) => {
                        return (
                            <Card
                                key={index}
                                type={el.type}
                                name={el.name}
                                image={el.image}
                                otherSpecs={el}
                            />
                        );
                    })}
                </div>
            </div> */}
        </>
    );
}
