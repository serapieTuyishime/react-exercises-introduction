import Navigation from "./ui/Navigation";

const animals = [
    ["🐶", "dog"],
    ["🐱", "cat"],
    ["🐔", "chicken"],
    ["🐮", "cow"],
    ["🐑", "sheep"],
    ["🐴", "horse"],
];

export default function Exe5() {
    return (
        <>
            <Navigation />

            <div className="main">
                <div className="grid w-32">
                    {animals.map((el, index) => {
                        return (
                            <div
                                className="flex justify-center w-full gap-2 py-2 border border-gray-400"
                                key={index}
                            >
                                <span>{el[0]}</span>
                                <span>{el[1]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
