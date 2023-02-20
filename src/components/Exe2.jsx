import Navigation from "./ui/Navigation";

export default function Exe2() {
    return (
        <>
            <Navigation />

            <div className="main">
                <button
                    className="px-6 py-2 bg-gray-200 rounded"
                    onClick={() => alert("Clicked!")}
                >
                    Click me
                </button>
            </div>
        </>
    );
}
