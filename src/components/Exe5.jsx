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
        <div className="main">
            <div className="grid w-32">
                {animals.map((el, index) => {
                    return (
                        <div
                            className="flex w-full border border-gray-400 justify-center gap-2 py-2"
                            key={index}
                        >
                            <span>{el[0]}</span>
                            <span>{el[1]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
