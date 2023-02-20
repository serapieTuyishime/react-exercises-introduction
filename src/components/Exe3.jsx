import Navigation from "./ui/Navigation";

export default function Exe3() {
    return (
        <>
            <Navigation />

            <div className="main">
                <div className="flex gap-2">
                    <button
                        className="px-6 py-2 bg-gray-200 border border-black rounded "
                        onClick={() => alert("You clicked button 1")}
                    >
                        Button 1
                    </button>
                    <button
                        className="px-6 py-2 bg-gray-200 border border-black rounded "
                        onClick={() => alert("You clicked button 2")}
                    >
                        Button 2
                    </button>
                    <button
                        className="px-6 py-2 bg-gray-200 border border-black rounded "
                        onClick={() => alert("You clicked button 3")}
                    >
                        Button 3
                    </button>
                </div>
            </div>
        </>
    );
}
